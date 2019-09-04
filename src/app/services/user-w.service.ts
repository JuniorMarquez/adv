import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserWService {
info:any={};
isLogged:boolean=false;
	userW:any[]=[];
	name:string;
	idCard:string;
	type:string;
  constructor() { }
}


