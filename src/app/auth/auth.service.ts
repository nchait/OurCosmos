import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { CookieService } from 'angular2-cookie/core';

@Injectable()
export class AuthService {
  username=0;
  options;
  headers = null;
  myKeyA='our-cosmos-cookie';
  myKeyB='our-cosmos-id';
  constructor(private http: HttpClient, private _cookieService:CookieService) { 


  }
  getInfo(){
    return this.username;
  }
  logOut(){
    this._cookieService.put(this.myKeyA,0);
    this._cookieService.put(this.myKeyB,0);
    this.username = 0;
  }
  checkCookie(callback_fun){
    var cookieA = this._cookieService.get(this.myKeyA); 
    var cookieB = this._cookieService.get(this.myKeyB); 
    this.http.get('/api/users/cookie/'+cookieB+'&'+cookieA).subscribe(data => {
      if (this.username==undefined){
        console.log('called');
        this.logOut();
        return callback_fun(this.username);
        
      }
      this.username = data.username;
      console.log(data.message);
      callback_fun(this.username);
    });
  }
  attemptSignup(callback_fun, email: String, username: String, password: String) {
    
    let body = ({       
      'email': email,
      'username':username,
      'password':password
    });
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    console.log(body);    
    this.http.post('/api/users/', body, {headers: this.headers}).subscribe(data => {
      console.log(data);
      callback_fun(data.message);
    });
  }
  attemptSignin(callback_fun, eamil: String, password: String) {
    
    let body = ({       
      'email': email.value,
      'password':password
    });
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    console.log(body);    
    this.http.post('/api/users/signin', body, {headers: this.headers}).subscribe(data => {
      console.log(data);
      this._cookieService.put(this.myKeyA,data.cookie);
      this._cookieService.put(this.myKeyB,data.id);
      this.username = data.username;
      callback_fun(data.message);
    });
  }
}
