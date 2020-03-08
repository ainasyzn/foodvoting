import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  about: any = {
    imgURL: "",
    text: ""
  };
  constructor(
    private fb: FirebaseService
  ) {
    this.about = {
      imgURL: "",
      text: ""
    };
  }

  async ngOnInit() {
    const about = await (await this.fb.getAbout()).subscribe((res) => {
      this.about = res;
      this.about.imgURL = res["imgURL"];
      about.unsubscribe();
    })
  }

  getUrlCond(){
    if(this.about.imgURL.length > 0) return true;

    return false;
  }

}
