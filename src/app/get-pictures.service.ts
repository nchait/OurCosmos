import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetPicturesService {

  constructor(private http: HttpClient) { }
  
  /*
  * This function receives a callback funtion to send back the aynchronous response from the server.
  */
  getData(callback_fun) {
    this.http.get('/api/nasa/search/').subscribe(data => {
      console.log(data);
          //console.log(data.body.collection.items);
          let pictures;
          let j: any;
          
          for(j in data.body.collection.items) {
             pictures[j]=data.body.collection.items[j].links[0].href;
          }
          callback_fun(pictures);
      });
  }

}
