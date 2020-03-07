import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: any;
  constructor(
    private navCtrl: NavController,
    private router: Router,
    private loadingController: LoadingController,
    private fb: FirebaseService 
  ) { }

  async ngOnInit() {
    await (await this.fb.readCurrentUser()).subscribe((res) => {
      console.log(res);
      this.user = res;
    });
  }

  async logout(){
    let scope = this;
    const loading = await this.loadingController.create({message: "Loading.."});
    loading.present();
    this.fb.logout().then(function(){
      loading.dismiss();
      scope.navCtrl.navigateRoot('/login');
    });
  }

  async contact(){
    this.router.navigate(['/contact']);
  }

  async myAccount(){
    this.router.navigate(['/myaccount']);
  }
}
