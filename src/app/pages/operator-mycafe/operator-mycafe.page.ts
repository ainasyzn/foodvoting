import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/services/todo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-operator-mycafe',
  templateUrl: './operator-mycafe.page.html',
  styleUrls: ['./operator-mycafe.page.scss'],
})
export class OperatorMycafePage implements OnInit {

  queryText: string;
  todos: Todo[];
  id: any;
  menus:any;

  constructor(
    private router: Router,
    private fb: FirebaseService,
    private route: ActivatedRoute
    ) { }

  async ngOnInit() {
    const user = await this.fb.readCurrentUser();
    console.log(user);
    user.subscribe((res)=>{
      this.id = res["cafe"];
      this.getMenu();
    })
  }


  async getMenu(){
    let menus = await this.fb.readMenu();

    menus.subscribe(res => {
      this.menus = [];
      res.map(r => {        
        let temp = Object.assign({id:r.payload.doc.id}, r.payload.doc.data());
        if(temp["cafeid"].replace(" ", "") == this.id.replace(" ", "")){
          this.menus.push(temp);
        }
      });

      console.log(this.menus)
    });
  }

  remove(id){
    console.log(id);
  }

  navigate(type, id){
    
    this.router.navigate(['/details/' + type + "/" + id]);
  }



}
