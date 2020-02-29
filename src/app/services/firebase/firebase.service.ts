import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private afstore: AngularFirestore,
    private fauth: AngularFireAuth
  ) { }

  async getCurrentUser(){
    return new Promise((resolve, reject) => {
      this.fauth.user.subscribe(user => {
        resolve(user);
      });
    });
  }

  async readCafe(){
    return this.afstore.collection("cafe").snapshotChanges();
  }  
  
  async readOwnCafe(id){
    return this.afstore.collection("cafe/" + id).snapshotChanges();
  }

  async readMenu(){
    return this.afstore.collection("menu").snapshotChanges();
  }

  async readOwnMenu(id){
    return this.afstore.collection("menu" + id).snapshotChanges();
  }

  async updateMenu(id, menu){
    return this.afstore.doc("menu/" + id).set(menu);
  }

  async createUser(uid, user){
    return this.afstore.doc('users/' + uid).set(user); 
  }

  async createCafe(cafe){
    return this.afstore.collection('cafe').add(cafe); 
  }

  async readUser(){
    return this.afstore.collection("users").snapshotChanges();
  }

  async readCurrentUser(){
    const current_user = await this.getCurrentUser();
    return this.afstore.doc("users/" + current_user["uid"]).valueChanges();
  }
  async updateUser(user, id){
    await this.afstore.doc('users/' + id).set(user, { merge: true });
  }
}
