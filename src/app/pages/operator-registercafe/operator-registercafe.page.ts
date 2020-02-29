import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-operator-registercafe',
  templateUrl: './operator-registercafe.page.html',
  styleUrls: ['./operator-registercafe.page.scss'],
})
export class OperatorRegistercafePage implements OnInit {

  village: string = ""
  name: string = ""
  desc: string = ""
  img: string = ""
  cafe: string = ""
  id: any;

  constructor(
    private router: Router,
    private firebase: FirebaseService
  ) { }

  ngOnInit() {
  }

  async register() {
    let { village, name, desc } = this
    const img = "http://2.bp.blogspot.com/-B6Khz4RCvgY/UVl5upLRq1I/AAAAAAAAgM4/tGZ3a7Sb8aY/s1600/bg10.JPG";


    const cafe = {
      village: village,
      name: name,
      desc: desc,
      img: img,
    };

    this.saveCafeToDB(cafe);
    this.router.navigate(['operator/home']);
  }

  async saveCafeToDB(cafe) {
    try {
      const createCafe = await this.firebase.createCafe(cafe);
      await this.saveUserToDB(createCafe.id);
      alert(cafe.name + " successfully created");
    } catch (e) {
      alert(e.message);
    }
  }

  async saveUserToDB(id) {
    const current_user = await this.firebase.getCurrentUser();
    const cafe = {
      cafe: id
    }
    await this.firebase.updateUser(cafe, current_user["uid"]);
  }
}
