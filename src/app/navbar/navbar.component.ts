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
  constructor(private _searchService: SearchService, private authService:AuthService, private router: Router, private cdr: ChangeDetectorRef) { 
    this.authService.checkCookie(this.onResponse.bind(this));
    this.info = this.authService.getInfo();
  }  
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
  logOut(){
    console.log('logout');
    this.authService.logOut();
    this.router.navigate(['/']);
    this.cdr.detectChanges();
    this.router.navigate['/signin'];
  }
  signIn(){
    console.log('signing in');
    this.router.navigate['/signin'];
  }
  onSearch(form: NgForm){
    console.log(    form.value.theSearch    );
    this._searchService.getPrevData(form.value.theSearch);
  }

}
/*
import { Router } from '@angular/router'; 
private router: Router
this.router.navigate(['/']);    
*/