import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.page.html',
  styleUrls: ['./admin-home.page.scss'],
})
export class AdminHomePage implements OnInit {

  id = null;
  type : any;

  constructor(
    private route: ActivatedRoute, 
    private nav: NavController) { }

  ngOnInit() {

  
  }
}
