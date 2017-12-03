import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class DocumentationService {
  headers = null;  
  constructor(private http: HttpClient) { }
  changeDoc(callback_fun, words, name){
    let body = ({       
      'words': words,
      'name': name
    });
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    console.log(body);    
    this.http.post('/api/document', body, {headers: this.headers}).subscribe(data => {
      console.log(data);
      callback_fun(data.message);
    });
  }
  getDoc(callback_fun){
    this.http.get('/api/document').subscribe(data => {
      callback_fun(data);
    });
  }
}
