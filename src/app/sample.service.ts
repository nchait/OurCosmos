import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SampleService {

  constructor(private http: HttpClient) { }
  
  /*
  * This function receives a callback funtion to send back the aynchronous response from the server.
  */
  getData(callback_fun, params: String) {
    this.http.get('/api/nasa/search/'+params).subscribe(data => {
          //console.log(data.body.collection.items);

        //console.log(data.body.collection.items);
        //console.log(data.body.collection.items);
        let pictures= new Array(100);
        let j: any;
        let res = data.body.collection.items;
        console.log(res);
        console.log(res[0].links[0].href);

        for(j in res) {
            pictures[j]=res[j].links[0].href;
        }
        callback_fun(pictures);
      });
  }

}


//    this.http.get('https://images-api.nasa.gov/search?q=apollo%2011&media_type=image').subscribe(data => {
//search?q=apollo%2011&media_type=image
    //    this.http.get('/api/bears/5a1c8b46601e6225b9b86697').subscribe(data => {