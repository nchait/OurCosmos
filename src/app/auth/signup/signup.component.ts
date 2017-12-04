import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'; 


@NgModule({
    imports: [
        NgbModule
    ],
    declarations: [],
    exports: []
})

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  outcome='';
  constructor(private authService:AuthService, private router: Router) {
    this.authService.logOut();//log them out if they are here
    
   }

  ngOnInit() {
  }
  onSignup(form: NgForm){
    const email = form.value.email;
    var x = email.split('@');
    if (x.length!=2){
      this.outcome = 'invalid email';//validate email for @ and .
      return
    }
    x=x[1].split('.');
    if (x.length!=2){
      this.outcome = 'invalid email';
      return
    }
    const username = form.value.title;
    const password = form.value.password;
    if (email.length<3 || password.length<3 || username.length<3){//minimum lengths of inputs
      this.outcome = 'all lengths must be larger than 3';
      return
    }
    this.authService.attemptSignup(this.onResponse.bind(this), email, username, password); //attempt sign up
  }
  onResponse(res){//called by Auth service
      if(res==200){//all possible outputs
        this.outcome='Success';
      } else if (res == 208) {
        this.outcome='Email Taken';        
      }  else {
        this.outcome='inexplicable error please reload the page and try again';              
      }
  }
  onClick(){
    this.router.navigate(['/signin']);//go to sign in
  }

}
