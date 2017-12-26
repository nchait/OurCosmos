import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CollectService {
  headers;
  constructor(private http: HttpClient) { }
  newCollection(callback_fun, pub: boolean, name: String, descrip: String, image: String, creator: String){
    //create a new collection
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
      let x:any=data;
      callback_fun(x.message);
    });
  } 
  rateCollection (callback_fun, collId, myId, val){
    let body = ({       
      'collId': collId,
      'userId': myId,
      'rate':val//send a rating
    });
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    console.log(body);    
    this.http.post('/api/rating/', body, {headers: this.headers}).subscribe(data => {
      let x:any=data;
      console.log(data);
      callback_fun(x.message);
    });
  }
  deleteCollection(callback_fun, id){//delete a collection
    this.http.delete('/api/collections/'+id).subscribe(data => {
      callback_fun(data);
    });
  }
  sendDMCA(callback_fun, id){
    this.http.get('/api/dmca/'+id).subscribe(data => {
      callback_fun(data);//report an image
    });
  }
  fixDMCA(callback_fun, id){
    this.http.delete('/api/dmca/'+id).subscribe(data => {
      callback_fun(data);//restore an image
    });
  }
  getDmca(callback_fun){
    this.http.get('/api/dmca').subscribe(data => {
      callback_fun(data);//get all reported collections
    });
  }
  updateCollection(callback_fun, item){
    let body = ({       
      'doc': item
    });//update collections values
    //console.log(body);
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    //console.log(body);    
    this.http.put('/api/collections/', body, {headers: this.headers}).subscribe(data => {
      //console.log(data);
      let x:any=data;
      callback_fun(x.message);
    });
  } 
  
  getPublics(callback_fun){//get public collections
    this.http.get('/api/collections').subscribe(data => {
      callback_fun(data);
    });
  }
  getCollections(callback_fun, info: String){//get my collections
    this.http.get('/api/collections/'+info).subscribe(data => {
      console.log('the collection data: '+data);
      callback_fun(data);
    });
  }
  addCollections(callback_fun, item){
    let body = ({       
      'doc': item//add or delete from a collection
    });
    console.log(body);
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    console.log(body);    
    this.http.post('/api/collections/'+item._id, body, {headers: this.headers}).subscribe(data => {
      let x:any=data;
      console.log(data);
      callback_fun(x.message);
    });
  } 
}
