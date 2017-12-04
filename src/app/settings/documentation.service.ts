import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class DocumentationService {
  headers = null;  
  constructor(private http: HttpClient) { }
  changeDoc(callback_fun, words, id){//update doc
    let body = ({       
      'words': words,
      'id': id
    });
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    console.log(body);    
    this.http.post('/api/document', body, {headers: this.headers}).subscribe(data => {
      console.log(data);
      callback_fun(data.message);
    });
  }
  getDoc(callback_fun){//show the doc
    this.http.get('/api/document').subscribe(data => {
      callback_fun(data);
    });
  }
}
