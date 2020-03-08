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
  temp:any;
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
      this.cafes = [];
      res.map(r => {        
        let temp = Object.assign({id:r.payload.doc.id}, r.payload.doc.data());
        if(temp["village"] == village){
          this.cafes.push(temp);
        }
      });

      this.temp = JSON.parse(JSON.stringify(this.cafes));
    });
  }

  filterItems(e) {
    this.cafes = JSON.parse(JSON.stringify(this.temp));
    this.cafes = this.cafes.filter(item => {
      return item.name.toLowerCase().indexOf(e.detail.value.toLowerCase()) > -1;
    });
  }

  toVillage(id){
    this.router.navigate(['/village/' + id]);
  }
}

