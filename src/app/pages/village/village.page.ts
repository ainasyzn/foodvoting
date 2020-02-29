import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Todo, TodoService } from '../../services/todo.service';
import { FirebaseService } from '../../services/firebase/firebase.service'

@Component({
  selector: 'app-village',
  templateUrl: './village.page.html',
  styleUrls: ['./village.page.scss'],
})
export class VillagePage implements OnInit {
 
  ngOnInit() {}

}
