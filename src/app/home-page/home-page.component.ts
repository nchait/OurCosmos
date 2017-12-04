import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CollectService } from '../collections/collect.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  info;
  constructor(private collectService: CollectService, private authService:AuthService) { 
    this.authService.checkCookie(this.onResponse.bind(this));//check cookies
    this.info = this.authService.getInfo();//set user
    console.log(this.info);
    this.collectService.getPublics(this.show.bind(this));//get the public collections
  }  
  onResponse(theInfo){//set user
    this.info=theInfo;
    if (theInfo==undefined){
      this.info = 0;
    }
    console.log(theInfo); 
  }
  //this.onResponse.bind(this)
  collections;

  show(res){//show the collections and sort them and only show 10
    console.log(res[4].publicRating);
    console.log(res[3].publicRating);
    if (res[4].publicRating>res[5].publicRating){
      console.log('good');
    }
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < res.length-1; i++) {
          var x1 = res[i].publicRating;
          if (x1==undefined){
            x1=0;
          }
          var x2 = res[i+1].publicRating;
          if (x2==undefined){
            x2=0;
          }
          if (x1< x2) {
              var temp = res[i];
              res[i] = res[i+1];
              res[i+1] = temp;
              swapped = true;
          }
        }
    } while (swapped);
    console.log(res);
    if (res.length>10){
      this.collections=res.slice(0,10);
    }else {
      this.collections=res;      
    }
    console.log(this.collections.length);
  }
  
  ngOnInit() {

  }

}

