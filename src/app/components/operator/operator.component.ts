import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss'],
})
export class OperatorComponent implements OnInit {
  villages: String = "3";
  cafes: any;

  constructor(private router: Router, 
    private fb:FirebaseService) { 
      this.getCafe(this.villages);
    }

  ngOnInit() {}

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
    this.router.navigate(['operator/village/' + id]);
  }

}
