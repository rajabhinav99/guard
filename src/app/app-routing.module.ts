import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EventComponent } from './event/event.component';
import { TemplatedriveformComponent } from './templatedriveform/templatedriveform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { AuthGuard } from './guards/auth.guard';
import { ParentComponent } from './parent/parent.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent,canActivate:[AuthGuard]},
  {path:'contact',component:ContactComponent,canDeactivate:[AuthGuard]},
  {path:'emplist',component:EmployeelistComponent},
  {path:'eventdemo',component:EventComponent},
  {path:'templateform',component:TemplatedriveformComponent},
  {path:'reactiveform',component:ReactiveformComponent},
  {path:'login',component:LoginComponent},
  {path:'servicedemo',component:ProductComponent},
  {path:'parenttochild',component:ParentComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
