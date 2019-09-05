import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { TixInterface } from '../models/tix-interface';
import { CardInterface } from '../models/card-interface';
import { UserWService } from "./user-w.service";



@Injectable({
  providedIn: 'root'
})
export class DataApiService {
	tixs: Observable<any>;
	tix: Observable<any>;
	cards: Observable<any>;


	// cards:any={};
 //info:any={};


  constructor(public _uw:UserWService,private http: HttpClient, private authService:AuthService) {}
 public card : CardInterface ={
    userd:"",
  	type:""
  };
  	headers : HttpHeaders = new HttpHeaders({
  		"Content-Type":"application/json",
  		Authorization:this.authService.getToken()
  		});

	getAllTixs(){
		const url_api = 'http://192.168.0.107:3000/api/product?filter[where][status]=activated';
		return this.http.get(url_api);

	}
	getTixById(id:string){
		//console.log(id);
		let indice = id;
		const url_api=`http://192.168.0.107:3000/api/product/${indice}`;
		this.tix = this.http.get(url_api);
//		this.tix.front = this.tix.images[0];
		return (this.tix);
	}
	getPending(){
		const url_api='http://192.168.0.107:3000/api/product?filter[where][status]=pending';
		return (this.tixs = this.http.get(url_api));
	}
	saveTix(tix :TixInterface){
		let token = this.authService.getToken();
		const url_api='http://192.168.0.107:3000/api/product?access_token${token}';
		return this.http
		.post<TixInterface>(url_api, tix,{headers: this.headers})
		.pipe(map(data => data));
	}
	updateTix(tix: TixInterface){
		let token = this.authService.getToken();
		const url_api='http://192.168.0.107:3000/api/product?access_token${token}';
		return this.http
		.put<TixInterface>(url_api, tix,{headers: this.headers})
		.pipe(map(data => data));
	}
	deleteTix(id: string){
		let token = this.authService.getToken();
		const url_api='http://192.168.0.107:3000/api/product?access_token${token}';
		return this.http
		.delete<TixInterface>(url_api, {headers: this.headers})
		.pipe(map(data => data));
	}



	//getCardById(id:string){
		// console.log(id);
		//let indice = id;
		//const url_api=`http://192.168.0.107:3000/api/card/${indice}`;
		//this.card = this.http.get(url_api);
		//return (this.card);
	//}


	 getCards(id:string){
		let indice = id;
		//	console.log("indice de usuario a buscar en cards: ", indice);
		//this.info=[];
		const url_api = "http://192.168.0.107:3000/api/card?filter[where][userd]=a"+indice;
		//this._uw.cards=this.http.get(url_api)
		//return 
		return this.http.get(url_api);
	}
}
