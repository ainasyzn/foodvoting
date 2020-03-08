import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase/firebase.service'
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs';
import { AngularFireList } from '@angular/fire/database/interfaces';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.scss'],
})
export class ViewAdminComponent implements OnInit {
  data: Observable<any[]>;
  ref: AngularFireList<any>;
  menus:any;
  chart: Chart;
  voteSelection: any = 0;
  temp:any;
  id: any;

  constructor(
    private fb: FirebaseService,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private router: Router,
    public navCtrl: NavController,
    private loadingController: LoadingController
  ) { }

  async ngOnInit() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.id = this.route.snapshot.params['id'];
    this.getMenu(loading);
  }


  async getMenu(loadings) {
    let loading = loadings;
    let menus = await this.fb.readMenu();

    menus.subscribe(async (res) => {
      if(!loading){
        const loading = await this.loadingController.create();
        await loading.present();
      }
      this.menus = [];
      res.map(r => {
        let temp = Object.assign({ id: r.payload.doc.id }, r.payload.doc.data());
        if(!temp.hasOwnProperty('imageURL')){
          temp["imageURL"] = "assets/images/no-image.jpg";
        }
        if (temp["cafeid"] == this.id) {
          this.menus.push(temp);
        }
      });
      this.temp = this.menus;
      this.showChart(this.menus, loading);
    });
  }

  filterItems(e) {
    this.menus = JSON.parse(JSON.stringify(this.temp));
    this.menus = this.menus.filter(item => {
      return item.name.toLowerCase().indexOf(e.detail.value.toLowerCase()) > -1;
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

  changeValue(i) {
    this.voteSelection = i;
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Saving vote',
      duration: 1500
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async voteMenu() {
    this.menus[this.voteSelection].vote = parseInt(this.menus[this.voteSelection].vote) + 1
    const menuId = this.menus[this.voteSelection].id;
    delete this.menus[this.voteSelection].id;
    try{
      const update = await this.fb.updateMenu(menuId, this.menus[this.voteSelection]);
      await this.presentLoading();
      alert("Successfully Vote");
    } catch (e){
      alert(e.message);
    }
    
  }

  toDetail(menu){
    //details/:type/:id
    this.router.navigate(['details/edit/' + menu.id]);
  }
}
