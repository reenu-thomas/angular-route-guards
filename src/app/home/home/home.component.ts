import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteGuardService } from 'src/app/route-guard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any;

  constructor(private router:Router, private mys: RouteGuardService) { }

  ngOnInit(): void {
    if(this.mys.getUser()=='general')
    this.user='User';
    else
    this.user=this.mys.getUser();
  }

  adminNav(){
    this.router.navigate(['/admin']);
  }

  managerNav(){
    this.router.navigate(['/manager']);
  }

  userNav(){
    this.router.navigate(['/general']);
  }

  loginNav(){
    this.router.navigate(['/login']);
  }
}
