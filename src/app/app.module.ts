import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { IonicStorageModule } from '@ionic/storage';
import { FirebaseService } from './services/firebase/firebase.service';
import { HttpClientModule } from '@angular/common/http';



var firebaseConfig = {
    apiKey: "AIzaSyAFgIcWEsn_de3Bz0kdzBooW7ZQIiRfs38",
    authDomain: "foodvoting-b5457.firebaseapp.com",
    databaseURL: "https://foodvoting-b5457.firebaseio.com",
    projectId: "foodvoting-b5457",
    storageBucket: "foodvoting-b5457.appspot.com",
    messagingSenderId: "134100106516",
    appId: "1:134100106516:web:ad736f272f9d1d28e0d601",
    measurementId: "G-X84X947CY3"
  };

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(), 
    BrowserModule, 
    CommonModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
