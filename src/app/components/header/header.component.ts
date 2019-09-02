import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
//import { Router } from '@angular/router';
import { UserInterface } from '../../models/user-interface'; 
import { Location } from '@angular/common';
import { UserWService } from "../../services/user-w.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _uw:UserWService, private authService: AuthService,private location: Location) { }
//user: UserInterface;
public user : UserInterface ={
    name:"",
    email:"",
    password:""
  };
  
  public isLogged =false;
  ngOnInit() {
      this.user = this.authService.getCurrentUser();
       this.onCheckUser();
      this._uw.name=''; 
  }
  onLogout():void{
    this.authService.logoutUser();
    location.reload();
  }
    onCheckUser(): void {
    if (this.authService.getCurrentUser() === null) {
      this.isLogged = false;
      this._uw.isLogged=false;
    } else {
      this._uw.name=this.user.name;
      this.isLogged = true;
      this._uw.isLogged=true;
    }
  }

}
