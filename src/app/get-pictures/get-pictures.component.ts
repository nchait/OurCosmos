import { Component, OnInit } from '@angular/core';
import { GetPicturesService } from '../get-pictures.service';

@Component({
  selector: 'app-get-pictures',
  templateUrl: './get-pictures.component.html',
  styleUrls: ['./get-pictures.component.css']
})
export class GetPicturesComponent implements OnInit {

  // Initialize response with empty string
  response = '';
  fill = '';

  pictures = new Array(100);
  constructor(private _getPicService: GetPicturesService) {
    this._getPicService.getData(this.onResponse.bind(this));
  }

  ngOnInit() {
  }
  
  onClick() {
    // Call the service method, passing the onResponse as the callback
    // binding 'this' is required to avoid "this is undefined error"
    //this._getPicService.getData(this.onResponse.bind(this));
  }
  
  /*
   * The HTTP request is aynchronous.
   * Therefore a callback function is required to get back the response.
   */
  onResponse(res) {
    console.log(res);
    console.log(res[0].links[0].href);
    let j: any;
    
    for(j in res) {
       this.pictures[j]=res[j].links[0].href;
    }
    console.log(this.pictures);
    //this.fill=<img src=this.pictures[0]>


  }

}
//  <img width="300" alt="Angular Logo" src="https://images-assets.nasa.gov/image/'Witch Head' Brews Baby Stars_10592267924_o/'Witch Head' Brews Baby Stars_10592267924_o~thumb.jpg">  

