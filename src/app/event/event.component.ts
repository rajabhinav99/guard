import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

ClickMe()
{
  alert("Hello from click me");
}
 
Delete(id:number)
{
  alert('product to be deleted:'+id);
}
Edit(id:number ,name:string )
{
  alert(`product to be edited ${id}' and ${name}`);
}

names:string[]=["Supriya", "Vipul", "shiv"];

addNAmes(name:string){
  alert(name);
  this.names.push(name);

}
deleteName(name:string)
{
  alert('name to be deleted' +name);
  let indespotition = this.names.indexOf(name); 
  this.names.splice(indespotition);
}

 }
