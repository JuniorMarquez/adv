import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { TixInterface } from '../models/tix-interface';



@Injectable({
  providedIn: 'root'
})
export class DataApiService {
	tixs: Observable<any>;
	tix: Observable<any>;

  constructor(private http: HttpClient, private authService:AuthService) {}

  	headers : HttpHeaders = new HttpHeaders({
  		"Content-Type":"application/json",
  		Authorization:this.authService.getToken()
  		});

	getAllTixs(){
		const url_api = 'http://localhost:3000/api/tixs'
		return this.http.get(url_api);

	}
	getTixById(id:string){
		const url_api='http://localhost:3000/api/tixs/${id}';
		return (this.tix = this.http.get(url_api));
	}
	getOffers(){
		const url_api='http://localhost:3000/api/tixs?filter[where][Offers]=1';
		return (this.tixs = this.http.get(url_api));
	}
	saveTix(tix :TixInterface){
		let token = this.authService.getToken();
		const url_api='http://localhost:3000/api/tixs?access_token${token}';
		return this.http
		.post<TixInterface>(url_api, tix,{headers: this.headers})
		.pipe(map(data => data));
	}
	updateTix(tix: TixInterface){
		let token = this.authService.getToken();
		const url_api='http://localhost:3000/api/tixs?access_token${token}';
		return this.http
		.put<TixInterface>(url_api, tix,{headers: this.headers})
		.pipe(map(data => data));
	}
	deleteTix(id: string){
		let token = this.authService.getToken();
		const url_api='http://localhost:3000/api/tixs?access_token${token}';
		return this.http
		.delete<TixInterface>(url_api, {headers: this.headers})
		.pipe(map(data => data));
	}

}
