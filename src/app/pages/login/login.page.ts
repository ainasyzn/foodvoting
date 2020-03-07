import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  type: string = ""
  username: string = ""
  password: string = ""

  constructor(
    private router: Router, 
    public afAuth: AngularFireAuth,
    private fb: FirebaseService,
    private loadingController: LoadingController,
    public alertController: AlertController
  ) { }
  

  ngOnInit() {
  }

  async login(){
    let { type, username, password } = this;
    const loading = await this.loadingController.create({
      message: 'Signing in to ' + username + '`s account'
    });

    loading.present();
    const email = username + "@utp.edu.my"; 
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      this.getUser(username, loading);
    } 
    catch(error) {
      loading.dismiss();
      console.dir(error)
      alert(error.message);
    }
  }

  async getUser(username, loading){
    let users = await this.fb.readUser();

    const userS = users.subscribe(res => {
      for(let i = 0; i < res.length; i++){
        let temp = Object.assign({id:res[i].payload.doc.id}, res[i].payload.doc.data()); 
        if(temp["name"] == username){
          this.rerouteUser(temp, loading);
          break;
        }
      }
      userS.unsubscribe();
    });
  }

  rerouteUser(temp, loading){ 
      switch(temp["type"]){
        case 'student':
          loading.dismiss();
          this.router.navigate(['home/home']);
          return;
        case 'operator':
          loading.dismiss();
          if(temp.hasOwnProperty("cafe")){
            this.router.navigate(['operator/home']);
            return;
          }
          this.router.navigate(['operator/mycafe']);
          this.presentAlert();
          break;
        default:
          loading.dismiss();
          this.router.navigate(['admin/home']);
          break;
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
