import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  id = null;
  type : any;

  constructor(
    private route: ActivatedRoute, 
    private nav: NavController) { }

  ngOnInit() {

  
  }
}
