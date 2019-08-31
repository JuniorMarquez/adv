import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../models/user-interface'; 
//import {RouterModule,Routes} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  private user : UserInterface ={
  	name:"",
  	email:"",
  	password:""
  };

  ngOnInit() {
  }
  onRegister(): void{
  	this.authService.registerUser(
  		this.user.name, 
  		this.user.email, 
  		this.user.password
  		)
  	.subscribe(user => {
//  		console.log(user);	
  this.authService.setUser(user);
   let token  = user.id;
   this.authService.setToken(token);
   this.router.navigate(['/affiliates']);
   	});
  	}
}
