import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import {SampleService} from './sample.service';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './auth/auth.service';


const appRoutes:Routes=[
  {
    path: '',
    component: SampleComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    SignupComponent,
    SigninComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,                               // <========== Add this line!
    ReactiveFormsModule,
    NgbModule.forRoot(),    
    BrowserModule,
    HttpClientModule
  ],
  providers: [SampleService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
