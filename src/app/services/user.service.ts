import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Response } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://reqres.in/api/users/';
  constructor( private http : HttpClient) { }


  getAllUser(){
      return this.http.get<any>(this.url);
  }

  getDetails(id):Observable<any>{
    const url = `${this.url}${id}`;
   return this.http.get<any>(url);
    
  }
}
