import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FirebaseService } from '../services/firebase/firebase.service';
import { LoadingController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router, 
    private fb: FirebaseService,
    private loadingController: LoadingController,
    private alertController: AlertController
  ){

  }

  async canActivate() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    loading.present();
    const user = await this.getCurrentUser();
    
    try{
      if(this.rerouteUser(user, loading)){
        return false;
      }
    } catch (e) {}
    
    loading.dismiss();
    return true;
    
  }

  async getCurrentUser(){
    return new Promise(async (resolve) => {
      const user  = await (await this.fb.readCurrentUser()).subscribe((res) => {
        resolve(res);
        user.unsubscribe();
      });
    });
  }

  rerouteUser(temp, loading){ 
      switch(temp["type"]){
        case 'student':
          loading.dismiss();
          this.router.navigate(['home/home']);
          return true;
        case 'operator':
          loading.dismiss();
          if(temp.hasOwnProperty("cafe")){
            this.router.navigate(['operator/home']);
            return true;
          }
          this.router.navigate(['operator/mycafe']);
          this.presentAlert();
          return true;
        default:
          loading.dismiss();
          this.router.navigate(['admin/home']);
          return true;
      }
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Looks like you do not own a cafe yet. Proceed to register a new one to continue.',
      buttons: ['OK']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
    this.router.navigate(['operator/register']);
  }
}
