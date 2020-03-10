import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  contacts: any = {
    address: "",
    phone: "",
    email: ""
  };
  constructor(
    private fb: FirebaseService
  ) { }

  async ngOnInit() {
    const contacts = await (await this.fb.getContact()).subscribe((res) => {
      this.contacts = res;
      // contacts.unsubscribe();
    })
  }

}
