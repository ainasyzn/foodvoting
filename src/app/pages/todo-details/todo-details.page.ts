import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Todo, TodoService } from './../../services/todo.service'
import { LoadingController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';


@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.page.html',
  styleUrls: ['./todo-details.page.scss'],
})
export class TodoDetailsPage implements OnInit {

  imageURL: string

  todo: Todo = {
    name: '',
    vote: 0,
    description: '',
    cafeid: '',
    createdAt: new Date().getTime(),
    imageURL: ''
  }

  id = null;
  type: any;

  constructor(private todoService: TodoService,
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private nav: NavController,
    public afstore: AngularFirestore,
    public fb: FirebaseService,
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.type = this.route.snapshot.params['type'];
    const image = this.imageURL

    if (this.type == "edit") {
      this.editMenu();
    } else {
      this.todo.cafeid = this.id;
    }
  }

  fileChanged(event){

    alert("message");
    /*const files = event.target.files

    const data = new FormData()
    data.append('file', files[0])
    data.append('UPLOADCARE_STORE', '1')
    data.append('UPLOADCARE_PUB_KEY', 'ada5e3cb2da06dee6d82')

    this.http.post('https://upload.uploadcare.com/base/', data)
    .subscribe(event => {
      console.log(event)
      this.imageURL = event.json().file
    })*/

  }

  async editMenu() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.todoService.getTodo(this.id).subscribe(res => {
      loading.dismiss();
      this.todo = res;
    })
  }

  async saveTodo() {
    const loading = await this.loadingController.create();
    await loading.present();
    

    if (this.type == "edit") {
      this.todoService.updateTodos(this.todo, this.id).then(() => {
        loading.dismiss();
        this.nav.back();
      });

    } else {
      this.todoService.addTodos(this.todo).then(() => {
        loading.dismiss();
        this.nav.back();
      });
    }

  }
}
