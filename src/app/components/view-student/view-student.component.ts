import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase/firebase.service'
import { AlertController, LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router'


@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss'],
})
export class ViewStudentComponent implements OnInit {
  voteSelection: any = 0;
  temp:any;
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getMenu();
  }
  id: any;
  menus: any;

  constructor(
    private fb: FirebaseService,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private router: Router,
    private loadingController: LoadingController
  ) { }



  async getMenu() {
    let menus = await this.fb.readMenu();

    menus.subscribe(res => {
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
    });
  }

  filterItems(e) {
    this.menus = JSON.parse(JSON.stringify(this.temp));
    this.menus = this.menus.filter(item => {
      return item.name.toLowerCase().indexOf(e.detail.value.toLowerCase()) > -1;
    });
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
    this.router.navigate(['student/menu/details/' + menu.id]);
  }
}
