import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';

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
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  onSignup(form: NgForm){
    const email = form.value.email;
    const username = form.value.username;
    const password = form.value.password;
    this.authService.attemptSignup(this.onResponse.bind(this), email, username, password);    
  }
  onResponse(res){
      if(res==200){
        this.outcome='Success';
      } else if (res == 208) {
        this.outcome='Email Taken';        
      } else if (res == 204) {
        this.outcome='Username Taken';        
      } else {
        this.outcome='inexplicable error please reload the page and try again';              
      }
  }

}
