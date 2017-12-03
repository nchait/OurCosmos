import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { SampleService } from './sample.service';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './auth/auth.service';
import { FooterComponent } from './footer/footer.component';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HomePageComponent } from './home-page/home-page.component';
import { ShowSearchComponent } from './pictures/show-search/show-search.component';
import { SearchService } from './pictures/search.service';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { CollectService } from './collections/collect.service';


const appRoutes:Routes=[
  {
    path: 'generic',
    component: SampleComponent
  },
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'search',
    component: ShowSearchComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    SignupComponent,
    SigninComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    ShowSearchComponent
    ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,                               // <========== Add this line!
    ReactiveFormsModule,
    NgbModule.forRoot(),    
    BrowserModule,
    BootstrapModalModule,
    HttpClientModule
  ],
  entryComponents: [
    SampleComponent
  ],
  providers: [SampleService, AuthService, CookieService, SearchService, CollectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
