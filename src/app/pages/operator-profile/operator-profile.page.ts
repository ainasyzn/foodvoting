import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operator-profile',
  templateUrl: './operator-profile.page.html',
  styleUrls: ['./operator-profile.page.scss'],
})
export class OperatorProfilePage implements OnInit {

  constructor(public db: FirebaseService, private router: Router) { }

  async ngOnInit() {
    const user = await this.db.getCurrentUser();
    console.log(user);

  }


  async logout(){
    this.router.navigate(['/login']);
  }

  async contact(){
    this.router.navigate(['/contact']);
  }

  async myAccount(){
    this.router.navigate(['/myaccount']);
  }
}
