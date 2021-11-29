import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteGuardService } from 'src/app/route-guard.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user: any;

  constructor(private mys: RouteGuardService, private router: Router) { }

  ngOnInit(): void {
    if(this.mys.getUser()=='general')
    this.user='User';
    else
    this.user=this.mys.getUser();
  }

  homeNav(){
    this.router.navigate(['/home']);
  }

}
