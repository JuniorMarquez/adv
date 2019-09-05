import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../models/user-interface';  
import { CardInterface } from '../../models/card-interface';  
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-my-tixs',
  templateUrl: './my-tixs.component.html',
  styleUrls: ['./my-tixs.component.css']
})
export class MyTixsComponent implements OnInit {

  constructor(private router: Router, private location: Location, public dataApi: DataApiService, public _uw:UserWService,private authService: AuthService) { }
  public user : UserInterface ={
    name:"",
    email:"",
    password:""
  };


private cards:CardInterface;
 public cardsResult:any[]=[];

  public isLogged =false;

  ngOnInit() {
	  	this.user = this.authService.getCurrentUser();
 	 	// console.log(this.user);
    this._uw.name=this.user.name;
 	 	this.onCheckUser();
    let val=(this.user.id).toString();
       this.dataApi.getCards(val).subscribe((res:any) => {
      if (res[0] === undefined){
        console.log("no")
        }else{
          console.log("si")
        }
      //console.log(res);
      //this._uw.cardsResult=res[0];
      });
     // console.log(this._uw.cardsResult);
  }


  getCards(card_id: string){
    // this.dataApi.getCards(card_id)
    //.subscribe((cards: CardsInterface) => (this.card=cards));
    //this.card=this.dataApi.getCards(card_id);
    //console.log(this.card);
    //this.dataApi.getCards(card_id)
    //.subscribe(cards => {
    //this.cards = cards;         
    //});
    //console.log(this.cards);
    this.dataApi.getCards(card_id).subscribe((res:any) => {
      console.log(res);
      });
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
