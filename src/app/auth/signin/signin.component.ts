import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'; 

/*
import { Router } from '@angular/router'; 
private router: Router
this.router.navigate(['/']);    
*/
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent implements OnInit {

  outcome='';
  constructor(private authService:AuthService, private router: Router) {
    this.authService.logOut();    
   }

  ngOnInit() {
  }
  onSignin(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;  
    console.log(email);
    if (email.length<3 ||password.length<3){
      this.outcome = 'all lengths must be larger than 3';
      return
    }
    var x = email.split('@');    
    if (x.length!=2){
      this.outcome = 'invalid email';
      return
    }
    x=x[1].split('.');
    if (x.length!=2){
      this.outcome = 'invalid email';
      return
    } 
    this.authService.attemptSignin(this.onResponse.bind(this), email, password);    
  }
  onResponse(res){
      if(res==200){
        this.outcome='Success';
        this.router.navigate(['/mycosmos']);
      } else if (res == 210) {
        this.outcome='you are not verified';        
      } else if (res == 211) {
        this.outcome='invalid password';        
      } else if (res == 212) {
        this.outcome='invalid email';        
      } else {
        this.outcome='inexplicable error please reload the page and try again';              
      }
  }
  onClick(){
    this.router.navigate(['/signup']);
  }
}

