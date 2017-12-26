import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {
  query ='';
  response = '';
  fill = '';
  pictures = new Array(100);
  constructor(private http: HttpClient) { }
  getData(callback_fun, params: string) {
    this.query = params;
    this.http.get('/api/nasa/search/'+params).subscribe(data => {//search with query
      let x:any = data;
      let pictures= new Array(100);
      let j: any;
      let res = x.body.collection.items;
      //console.log(res);
      //console.log(res[0].links[0].href);

      for(j in res) {
          pictures[j]=res[j].links[0].href;
      }
      callback_fun(pictures);
      //console.log(data);  
//        callback_fun(pictures);
    });
  }
  getPrevData(callback_fun) {
    var params = this.query;
    this.http.get('/api/nasa/search/'+params).subscribe(data => {//search without query
      let x:any = data;
      let pictures= new Array(100);
      let j: any;
      let res = x.body.collection.items;
      //console.log(res);
      //console.log(res[0].links[0].href);

      for(j in res) {
          pictures[j]=res[j].links[0].href;
      }
      callback_fun(pictures);
      //console.log(data);  
//        callback_fun(pictures);
    });
  }
}
