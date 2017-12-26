import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { CookieService } from 'angular2-cookie/core';

@Injectable()
export class AuthService {
  username=0;
  options;
  headers = null;
  myKeyA='our-cosmos-cookie'; //session cookie
  myKeyB='our-cosmos-id';//user id
  constructor(private http: HttpClient, private _cookieService:CookieService) { 


  }
  getInfo(){
    return this.username;
  }
  logOut(){
    this._cookieService.put(this.myKeyA,'0');//remove cookies
    this._cookieService.put(this.myKeyB,'0');
    this.username = 0;//remove username
  }
  checkCookie(callback_fun){
    var cookieA = this._cookieService.get(this.myKeyA); //look for the saved cookies
    var cookieB = this._cookieService.get(this.myKeyB); 
    this.http.get('/api/users/cookie/'+cookieB+'&'+cookieA).subscribe(data => {//check if session still valid
      let x:any=data;
      if (this.username==undefined){//if not remove all cookies and tell user
        console.log('called');
        this.logOut();
        return callback_fun(this.username);
        
      }
      this.username = x.username;//if so set username
      console.log('cookie response ' + x.message);
      callback_fun(this.username);//give the user the username
    });
  }
  attemptSignup(callback_fun, email: String, username: String, password: String) {
    let body = ({       //set sign up body
      'email': email,
      'username':username,
      'password':password
    });
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    console.log('sign up body '+ body);    
    this.http.post('/api/users/', body, {headers: this.headers}).subscribe(data => {
      let x:any=data;
      console.log('sign up response ' + x.message);
      callback_fun(x.message);
    });
  }
  attemptSignin(callback_fun, email: any, password: String) {
    let body = ({       
      'email': email,
      'password':password
    });
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    console.log(body);    
    this.http.post('/api/users/signin', body, {headers: this.headers}).subscribe(data => {
      console.log(data);
      let x:any=data;
      this._cookieService.put(this.myKeyA,x.cookie);//set the cookies regardless because if not correct it will mean nothing
      this._cookieService.put(this.myKeyB,x.id);
      this.username = x.username;//set username internally
      callback_fun(x.message);
    });
  }
}
