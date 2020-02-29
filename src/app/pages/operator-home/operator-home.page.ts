import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AngularFireList } from '@angular/fire/database/interfaces';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { NavController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-operator-home',
  templateUrl: './operator-home.page.html',
  styleUrls: ['./operator-home.page.scss'],
})
export class OperatorHomePage implements OnInit {
  data: Observable<any[]>;
  ref: AngularFireList<any>;

  constructor(private db: AngularFireDatabase, public navCtrl: NavController, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.showChart();
  }

  showChart(){
    var ctx = (<any>document.getElementById('chart')).getContext('2d');
    var chart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: ["VB 6", "PHP", "Delphi", ".Net", "TyprScript"],
        datasets: [{
          label: "This is chart",
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          data: [20, 5, 10, 25, 45],
          borderWidth: 1
        }]
      }
    });
  }

}
