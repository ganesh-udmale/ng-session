import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }
  private currentUser;
  private url = 'https://reqres.in/api/users/';
  private loginurl = 'https://reqres.in/api/login';

  checkCurrentUser(){
    return localStorage.getItem('currentUser');
  }

  login(email:string , password:string){
    return this.http.post<any>(this.loginurl, {email: email, password: password})
    .pipe(map(user => {
      if(user && user.token){  
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
      return user;
    }));
  }

  logout() {
    localStorage.removeItem('currentUser');  
}
}
