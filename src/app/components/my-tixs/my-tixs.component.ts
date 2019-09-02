import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../models/user-interface';  
import { UserWService } from "../../services/user-w.service";
//import { NgxSpinnerModule } from "ngx-spinner";



@Component({
  selector: 'app-my-tixs',
  templateUrl: './my-tixs.component.html',
  styleUrls: ['./my-tixs.component.css']
})
export class MyTixsComponent implements OnInit {

  constructor(public _uw:UserWService,private authService: AuthService) { }
public user : UserInterface ={
    name:"",
    email:"",
    password:""
  };


 public isLogged =false;
  ngOnInit() {
	  	this.user = this.authService.getCurrentUser();
 	 	console.log(this.user);
    this._uw.name=this.user.name;
 	 	this.onCheckUser();
  }
    onCheckUser(): void {
    if (this.authService.getCurrentUser() === null) {
      this.isLogged = false;
      this._uw.isLogged=false;
    } else {
      this.isLogged = true;
      this._uw.isLogged=true;
    }
  }
}
