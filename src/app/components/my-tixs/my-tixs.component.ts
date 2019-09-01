import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../models/user-interface';  

@Component({
  selector: 'app-my-tixs',
  templateUrl: './my-tixs.component.html',
  styleUrls: ['./my-tixs.component.css']
})
export class MyTixsComponent implements OnInit {

  constructor(private authService: AuthService) { }
user: UserInterface;



 public isLogged =false;
  ngOnInit() {
	  	this.user = this.authService.getCurrentUser();
 	 	console.log(this.user);
 	 	this.onCheckUser();
  }
    onCheckUser(): void {
    if (this.authService.getCurrentUser() === null) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }
  }
}
