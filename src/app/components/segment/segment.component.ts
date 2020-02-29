import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.scss'],
})
export class SegmentComponent implements OnInit {
  villages: String = "3";
  cafes: any;
  constructor(
    private router: Router,
    private fb:FirebaseService
  ) { 
    this.getCafe(this.villages);
  }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    this.villages = ev.detail.value;
    this.getCafe(this.villages);
  }

  async getCafe(village) {
    let cafes = await this.fb.readCafe();

    cafes.subscribe(res => {
      console.log(res);
      this.cafes = [];
      res.map(r => {        
        let temp = Object.assign({id:r.payload.doc.id}, r.payload.doc.data());
        console.log(temp);
        if(temp["village"] == village){
          this.cafes.push(temp);
        }
      });

      
      console.log(this.cafes);
    });
  }

  toVillage(id){
    this.router.navigate(['/village/' + id]);
  }
}

