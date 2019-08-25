import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { Observable }  from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) {}

	getAllTixs(){
		const url_api = 'http://localhost:3000/api/tixs'
		return this.http.get(url_api)

	}
}
