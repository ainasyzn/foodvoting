import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Todo, TodoService } from './../../services/todo.service'
import { LoadingController, NavController, AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';


@Component({
  selector: 'app-student-menu-details',
  templateUrl: './student-menu-details.page.html',
  styleUrls: ['./student-menu-details.page.scss'],
})
export class StudentMenuDetailsPage implements OnInit {
  todo: Todo = {
    name: '',
    vote: 0,
    description: '',
    cafeid: '',
    createdAt: new Date().getTime(),
    imageURL: '',
    comments: [],
    nutrients: {}
  }


  nutrients: any = {
    carb: 0,
    protein: 0,
    fat: 0,
    cal: 0
  };
  comments: any = [];
  id = null;
  type: any;
  image: any;
  imgDetail: any;
  segment: any;
  constructor(private todoService: TodoService,
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private nav: NavController,
    public fb: FirebaseService,
  ) { }

  ngOnInit() {
    this.nutrients = {
      carb: 0,
      protein: 0,
      fat: 0,
      cal: 0
    };
    this.segment = "info";
    this.id = this.route.snapshot.params['id'];
    this.type = this.route.snapshot.params['type'];
    this.image = "assets/images/no-image.jpg";

    this.getMenu();
  }


  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }

  async getMenu() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.todoService.getTodo(this.id).subscribe(res => {
      console.log(res);
      loading.dismiss();
      this.todo = res;
      try {
        this.nutrients = JSON.parse(JSON.stringify(this.todo.nutrients));
      } catch (e) { }
      try {
        if (this.todo.imageURL.length) {
          this.image = this.todo.imageURL;
        }
      } catch (e) { }
      try {
        console.log(this.todo.comments)
        if (this.todo.comments.length) {
          this.parseComment(this.todo.comments);
        }
      } catch (e) { }
    })
  }

  parseComment(comments: String[]) {
    this.comments = [];
    comments.forEach((res: string) => {
      this.comments.push(JSON.parse(res));
    });
  }


  async presentAlertPrompt(menu) {
    const alert = await this.alertController.create({
      header: 'Comment',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Enter something'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (res) => {
            this.uploadComment(res, menu);
          }
        }
      ]
    });

    await alert.present();
  }

  async uploadComment(res, menu){
    const loading = await this.loadingController.create();
    await loading.present();
    const temp = JSON.parse(JSON.stringify(menu));
    (await this.fb.readCurrentUser()).subscribe(async (user) => {
      if(!temp.hasOwnProperty('comments')){
        temp.comments = [];
      }

      const comment = {
        "name": user["name"],
        "text": res.name,
      }
      temp.comments.push(JSON.stringify(comment));
      delete temp.id;
      await this.fb.updateMenuMerge(temp, this.id);
      loading.dismiss();
    });
  }
}
