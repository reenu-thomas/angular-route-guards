import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, CanDeactivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private router: Router) { }

  public canActivate(route: ActivatedRouteSnapshot){
    let user = sessionStorage.getItem('user');
    if(user == 'admin'){
      return true;
    }
    alert("You do not have access to this page!")
    // this.router.navigate(['/login']);
    return false;
  }



  public getUser(){
    return (sessionStorage.getItem('user'));
  }
}



@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router) { }

  public canActivate(route: ActivatedRouteSnapshot){
    let user = sessionStorage.getItem('user');
    if((user == 'manager')||(user=='admin')){
      return true;
    }
    alert("You do not have access to this page!")
    // this.router.navigate(['/login']);
    return false;
  }


}
