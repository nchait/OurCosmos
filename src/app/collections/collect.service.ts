import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CollectService {
  headers;
  constructor(private http: HttpClient) { }
  newCollection(callback_fun, pub: boolean, name: String, descrip: String, image: String, creator: String){
    
    let body = ({       
      'open': pub,
      'name': name,
      'descrip': descrip,
      'picture': image,
      'creator': creator
    });
    //console.log(body);
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    //console.log(body);    
    this.http.post('/api/collections/', body, {headers: this.headers}).subscribe(data => {
      //console.log(data);
      callback_fun(data.message);
    });
  } 
  rateCollection (callback_fun, collId, myId, val){
    let body = ({       
      'collId': collId,
      'userId': myId,
      'rate':val
    });
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    console.log(body);    
    this.http.post('/api/rating/', body, {headers: this.headers}).subscribe(data => {
      console.log(data);
      callback_fun(data.message);
    });
  }
  deleteCollection(callback_fun, id){
    this.http.delete('/api/collections/'+id).subscribe(data => {
      callback_fun(data);
    });
  }
  updateCollection(callback_fun, item){
    
    let body = ({       
      'doc': item
    });
    //console.log(body);
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    //console.log(body);    
    this.http.put('/api/collections/', body, {headers: this.headers}).subscribe(data => {
      //console.log(data);
      callback_fun(data.message);
    });
  } 
  
  getPublics(callback_fun){
    this.http.get('/api/collections').subscribe(data => {
      callback_fun(data);
    });
  }
  getCollections(callback_fun, info: String){
    this.http.get('/api/collections/'+info).subscribe(data => {
      console.log('the collection data: '+data);
      callback_fun(data);
    });
  }
  addCollections(callback_fun, item){
    
    let body = ({       
      'doc': item
    });
    console.log(body);
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    console.log(body);    
    this.http.post('/api/collections/'+item._id, body, {headers: this.headers}).subscribe(data => {
      console.log(data);
      callback_fun(data.message);
    });
  } 
}
