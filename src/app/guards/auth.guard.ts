import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactComponent } from '../contact/contact.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | 
    UrlTree> | boolean | UrlTree {
      alert('unauthorize access redirect to login');
      this.router.navigate(['login']);
    return true;
  }
  constructor(private router:Router)
  {
 
  }
  canDeactivate(component:ContactComponent): 
  boolean{

  
  return window.confirm('Are you sure you want to navigate?')
}
}