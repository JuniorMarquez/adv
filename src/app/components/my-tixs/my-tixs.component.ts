import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../models/user-interface';  
import { CardInterface } from '../../models/card-interface';  
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-my-tixs',
  templateUrl: './my-tixs.component.html',
  styleUrls: ['./my-tixs.component.css']
})
export class MyTixsComponent implements OnInit {
  constructor(private dataApi: DataApiService, public _uw:UserWService,private authService: AuthService) { }
  public user : UserInterface ={
    name:"",
    email:"",
    password:""
  };
  public card:CardInterface= {
    email:'',
    id:''
  };
  public isLogged =false;
  ngOnInit() {
	  	this.user = this.authService.getCurrentUser();
 	 	// console.log(this.user);
    this._uw.name=this.user.name;
 	 	this.onCheckUser();
    this.getCard(this.user.id);
  }
  getCardById(card_id: string){
    this.dataApi.getCardById(card_id).subscribe(card => (this.card = card));
    if (this.dataApi.getCardById(card_id)===null){
    console.log("new");
      }else{
        console.log("complete");
      }
    }

  getCard(card_id: string){
    if (this.dataApi.getCard(card_id)===null){
    console.log("Perfil por crear");
      }
      else{
        console.log("Perfil completo");
      }
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
