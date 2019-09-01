import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserInterface } from '../../models/user-interface'; 


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }
//user: UserInterface;
public isLogged:boolean=false;
  ngOnInit() {
  	this.onCheckUser();
  }

  onLogout():void{
  	this.authService.logoutUser();
  }
onCheckUser():void{
	if(this.authService.getCurrentUser()==null){
		this.isLogged=false;

	}else{
		this.isLogged=true;
		}
	}
}
