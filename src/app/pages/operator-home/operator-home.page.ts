import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AngularFireList } from '@angular/fire/database/interfaces';
import { Observable } from 'rxjs';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';


@Component({
  selector: 'app-operator-home',
  templateUrl: './operator-home.page.html',
  styleUrls: ['./operator-home.page.scss'],
})
export class OperatorHomePage implements OnInit {
  data: Observable<any[]>;
  ref: AngularFireList<any>;
  menus:any;
  id:any;
  chart: Chart;
  constructor(
    public navCtrl: NavController,
    private loadingController: LoadingController,
    public fb: FirebaseService
  ) { }

  async ngOnInit() {
    const loading = await this.loadingController.create();
    await loading.present();
    const user = await this.fb.readCurrentUser();
    user.subscribe((res)=>{
      this.id = res["cafe"];
      this.getMenu(loading);
    })
  }
  
  async getMenu(loadings){
    let loading = loadings;
    let menus = await this.fb.readMenu();

    menus.subscribe(async (res) => {
      if(!loading){
        const loading = await this.loadingController.create();
        await loading.present();
      }
      this.menus = [];
      res.map(r => {        
        let temp = Object.assign({id:r.payload.doc.id}, r.payload.doc.data());
        try{
          if(temp["cafeid"].replace(" ", "") == this.id.replace(" ", "")){
            this.menus.push(temp);
          }
        } catch (e){}
      });
      console.log(this.menus);
      this.showChart(this.menus, loading);
    });
  }

  showChart(menus, loading){
    var ctx = (<any>document.getElementById('chart')).getContext('2d');
    if(this.chart){
      this.chart.destroy();
    }
    let labels = [], datas = [];
    menus.forEach(element => {
        labels.push(element["name"]);
        datas.push(element["vote"]);
    });

    this.chart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: labels,
        datasets: [{
          label: "Votes",
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          data: datas,
          borderWidth: 1
        }]
      }
    });
  
  
    loading.dismiss();
  }

}
