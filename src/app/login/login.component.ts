import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: any;
  password: any;

  constructor(private http : HttpClient, private router : Router) { }

  ngOnInit(): void {

  }

  handleLoginClick(){
    if(this.username && this.password){
      this.authenticateUser(this.username);
    } else {
      alert('enter username and password');
    }

  }

  authenticateUser(userName: string){
    sessionStorage.setItem("user", userName);
    this.router.navigate(['/home']);
    // if(userName == "admin"){
    //   this.router.navigate(['/admin']);
    // } else if(userName == "manager"){
    //   this.router.navigate(['/manager']);
    // } else if(userName == "general"){
    //   this.router.navigate(['/general'])
    // }
  }

}
