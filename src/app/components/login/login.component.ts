import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../models/user-interface'; 
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { isError } from 'util';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { NgForm } from '@angular/forms/src/directives/ng_form';
import { ConfirmEqualValidatorDirective } from '../../confirm-equal-validator.directive';

declare var NgForm:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngFormLogin: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private location: Location) { }
  private user : UserInterface ={
    name:"",
  	email:"",
  	password:""
  };
  public isError = false;
  public isLogged =false;
  

  ngOnInit() {
    this.onCheckUser(); 
    this.ngFormLogin = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]]
    });
    
  }
  get fval() {
  return this.ngFormLogin.controls;
  }
  
  onLogin(){
     this.submitted = true;
      if (this.ngFormLogin.invalid) {
      return;
        } 
//      alert('form fields are validated successfully!');
      return this.authService.loginUser(
        this.user.email, 
        this.user.password
        )
    	.subscribe( 
    		data => {
            	this.authService.setUser(data.user);
            	const token = data.id;
              this.authService.setToken(token);
              this.router.navigate(['/mytixs']);
            	location.reload();
              this.isError = false;
        },
         error => this.onIsError()
        ); 
  }    
    

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }

   onCheckUser(): void {
    if (this.authService.getCurrentUser() === null) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
      this.router.navigate(['/mytixs']);
    }
  }


}
