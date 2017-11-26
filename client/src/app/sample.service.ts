import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SampleService {

  constructor(private http: HttpClient) { }
  
  /*
  * This function receives a callback funtion to send back the aynchronous response from the server.
  */
  getData(callback_fun) {
      this.http.get('/api').subscribe(data => {
          console.log(data);
          callback_fun(data['message']);
      });
  }

}
