import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatedriveform',
  templateUrl: './templatedriveform.component.html',
  styleUrls: ['./templatedriveform.component.css']
})
export class TemplatedriveformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  AddUser(form)
  {
    console.log(form.value);
  }

}
