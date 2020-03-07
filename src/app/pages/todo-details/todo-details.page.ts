import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Todo, TodoService } from './../../services/todo.service'
import { LoadingController, NavController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';


@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.page.html',
  styleUrls: ['./todo-details.page.scss'],
})
export class TodoDetailsPage implements OnInit {


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
  comments:any = [];
  id = null;
  type: any;
  image: any;
  imgDetail: any;
  segment: any;
  constructor(private todoService: TodoService,
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private nav: NavController,
    public fb: FirebaseService,
  ) { }

  ngOnInit() {
    this.segment = "info";
    this.id = this.route.snapshot.params['id'];
    this.type = this.route.snapshot.params['type'];
    this.image = "assets/images/no-image.jpg";

    if (this.type == "edit") {
      this.editMenu();
    } else {
      this.todo.cafeid = this.id;
    }
  }
  

  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }

  fileChanged(event) {
    this.imgDetail = event.target.files[0];
    this.extractImg(this.imgDetail);
  }

  removeImg(){
    this.image = "assets/images/no-image.jpg";
    this.imgDetail= "";
  }

  extractImg(file) {
    let scope = this;
    var reader = new FileReader();
    reader.onload = function (e) {
      try {
        scope.image = e.target["result"].toString();
      } catch (err) {}
    };
    reader.readAsDataURL(file);
  }

  async editMenu() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.todoService.getTodo(this.id).subscribe(res => {
      loading.dismiss();
      this.todo = res;
      try{
          this.nutrients = JSON.parse(JSON.stringify(this.todo.nutrients));
      } catch(e){}
      try{
        if(this.todo.imageURL.length){
          this.image = this.todo.imageURL;
        }
      } catch(e){}
      try{ 
        console.log(this.todo.comments)
        if(this.todo.comments.length){
          this.parseComment(this.todo.comments);
        }
      } catch(e){}
    })
  }
  parseComment(comments: String[]) {
    this.comments = [];
    comments.forEach((res: string) => {
      this.comments.push(JSON.parse(res));
    }); 
  }

  calculateCalory(){
    this.nutrients.cal = (this.nutrients.carb * 4) + (this.nutrients.protein * 4) + (this.nutrients.fat * 9);
  }

  async saveTodo() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.todo.imageURL = "";
    if(this.imgDetail != ""){
      const rec = await this.fb.uploadImage({menuid:this.id, imgname:this.imgDetail.name});
      await rec.put(this.imgDetail)
      this.todo.imageURL = await rec.getDownloadURL();
    }

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

  async updateNutrients(){
    const loading = await this.loadingController.create();
    await loading.present();
    this.todo.nutrients = JSON.parse(JSON.stringify(this.nutrients));
    this.todoService.mergeUpdateTodos(this.todo, this.id).then(() => {
      loading.dismiss();
      this.nav.back();
    });
  }
}
