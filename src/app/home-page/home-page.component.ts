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
    this.authService.checkCookie(this.onResponse.bind(this));
    this.info = this.authService.getInfo();
    console.log(this.info);
    this.collectService.getPublics(this.show.bind(this))
  }  
  onResponse(theInfo){
    this.info=theInfo;
    if (theInfo==undefined){
      this.info = 0;
    }
    console.log(theInfo);    
  }
  //this.onResponse.bind(this)
  collections;

  show(res){
    console.log(res);
    if (res>10){
      this.collections=res.slice(0,10);
    }else {
      this.collections=res;      
    }

    console.log(this.collections.length);
    
  }
  ngOnInit() {

  }

}

