import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {

  slideOpts = {};

  constructor() { 
  }

  ngOnInit() {
    this.slideOpts = {
      initialSlide: 0,
      speed: 400
    };
  }

}
