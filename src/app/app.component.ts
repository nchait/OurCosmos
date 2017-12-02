import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private authService:AuthService, private router: Router) { 
    this.authService.checkCookie(this.onResponse.bind(this));
  }  
  onResponse(theInfo){

    console.log(theInfo);
  }
  goHome(){
    this.router.navigate['/'];
  }
  //this.onResponse.bind(this)
}
