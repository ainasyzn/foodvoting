import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.page.html',
  styleUrls: ['./myaccount.page.scss'],
})
export class MyaccountPage implements OnInit {

  constructor(private fb: FirebaseService) { }

  async ngOnInit() {
    const user = await this.fb.getCurrentUser();
    console.log(user);
  }

}
