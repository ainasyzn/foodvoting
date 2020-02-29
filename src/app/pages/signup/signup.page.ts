import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  type: string = ""
  username: string = ""
  password: string = ""
  cpassword: string = ""

  constructor(
    private router: Router,
    public afAuth: AngularFireAuth,
    private firebase: FirebaseService
    ) { }

  ngOnInit() {
  }

  async signup() {
    let { type, username, password, cpassword } = this
    const email = username + "@utp.edu.my";
    if(password != cpassword) {
      return console.error("Password does not match!")
    }
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      const user = {
        name: username, 
        type: type
      };
      this.saveUserToDB(user, res.user.uid);
      this.router.navigate(['/login']);

    } catch(error) {
      console.log(error)
      alert(error.message);
    }
    
  }

  async saveUserToDB(user, uid){
    try{
      await this.firebase.createUser(uid, user);
      alert(user.name + " sucessfully created");
    } catch (e) {
      alert(e.message);
    }
  }

}
