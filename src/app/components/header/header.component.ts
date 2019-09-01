import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
//import { Router } from '@angular/router';
import { UserInterface } from '../../models/user-interface'; 
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService,private location: Location) { }
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

        
  }
  onLogout():void{
  	this.authService.logoutUser();
    location.reload();
  }
    onCheckUser(): void {
    if (this.authService.getCurrentUser() === null) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }
  }

}
