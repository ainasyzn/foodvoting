import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Todo, TodoService } from '../../services/todo.service';
import { FirebaseService } from '../../services/firebase/firebase.service'

@Component({
  selector: 'app-view-operator',
  templateUrl: './view-operator.component.html',
  styleUrls: ['./view-operator.component.scss'],
})
export class ViewOperatorComponent implements OnInit {

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

  navigate(type, id){
    
    this.router.navigate(['/details/' + type + "/" + id]);
  }
}
