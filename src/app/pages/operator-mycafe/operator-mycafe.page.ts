import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/services/todo.service';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-operator-mycafe',
  templateUrl: './operator-mycafe.page.html',
  styleUrls: ['./operator-mycafe.page.scss'],
})
export class OperatorMycafePage implements OnInit {
  searchTerm:any;
  queryText: string;
  todos: Todo[];
  id: any;
  menus:any;
  tempmenus:any;

  constructor(
    private router: Router,
    private fb: FirebaseService,
    ) { }

  async ngOnInit() {
    const user = await this.fb.readCurrentUser();
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

      this.tempmenus = JSON.parse(JSON.stringify(this.menus));

    });
  }

  remove(id){
    console.log(id);
    this.fb.deleteMenu(id).then((res) =>{
      alert("Successfully delete");
    });
  }

  navigate(type, id){
    this.router.navigate(['/details/' + type + "/" + id]);
  }

  filterItems() {
    this.menus = JSON.parse(JSON.stringify(this.tempmenus));
    this.menus = this.menus.filter(item => {
      return item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }



}
