import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { User } from '../model/User';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
form:FormGroup;

userlist: User[]=[]
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup(
      {
        name:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
        contact:new FormControl('',[Validators.required,Validators.pattern('[0-9]*')]),
        email:new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])

      }
    )
    
  }

  AddUser(form)
  {
    this.userlist.push(form.value);
    console.log(form.value);
  }

}
