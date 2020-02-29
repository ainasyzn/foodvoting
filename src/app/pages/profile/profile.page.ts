import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
