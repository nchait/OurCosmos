import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  info;
  constructor(private authService:AuthService) { 
    this.authService.checkCookie(this.onResponse.bind(this));
    this.info = this.authService.getInfo();
    console.log(this.info);
  }  
  onResponse(theInfo){
    this.info=theInfo;
    if (theInfo==undefined){
      this.info = 0;
    }
    console.log(theInfo);    
  }
  //this.onResponse.bind(this)
  ngOnInit() {
  }

}
