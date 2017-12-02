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
    this.http.get('/api/nasa/search/'+params).subscribe(data => {
      let pictures= new Array(100);
      let j: any;
      let res = data.body.collection.items;
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
