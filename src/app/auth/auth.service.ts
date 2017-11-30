import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { userInfo } from 'os';

@Injectable()
export class AuthService {
  options;
  headers = null;
  constructor(private http: HttpClient) { 


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

}
