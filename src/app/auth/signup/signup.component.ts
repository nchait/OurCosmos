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
    this.authService.logOut();
    
   }

  ngOnInit() {
  }
  onSignup(form: NgForm){
    const email = form.value.email;
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
    const username = form.value.title;
    const password = form.value.password;
    this.authService.attemptSignup(this.onResponse.bind(this), email, username, password);    
  }
  onResponse(res){
      if(res==200){
        this.outcome='Success';
      } else if (res == 208) {
        this.outcome='Email Taken';        
      }  else {
        this.outcome='inexplicable error please reload the page and try again';              
      }
  }
  onClick(){
    this.router.navigate(['/signin']);
  }

}
