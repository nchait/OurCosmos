import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router'; 
import { ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import {SearchService} from '../pictures/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  info;
  constructor(private _searchService: SearchService, private authService:AuthService, private router: Router) { 
    this.authService.checkCookie(this.onResponse.bind(this));
    this.info = this.authService.getInfo(); //get user for navbar options
  }  //all done using html and routerLink
  onResponse(theInfo){
    if (theInfo==undefined){
      theInfo=0;
    }
    this.info = theInfo;
    console.log(this.info);
  }
  //this.onResponse.bind(this)
  ngOnInit() {
  }


}
/*
import { Router } from '@angular/router'; 
private router: Router
this.router.navigate(['/']);    
*/