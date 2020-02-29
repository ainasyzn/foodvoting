import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  async reroute(){
    this.router.navigate(['/home']);
  }

}
