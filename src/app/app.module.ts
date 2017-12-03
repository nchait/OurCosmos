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
import { PublicComponent } from './collections/public/public.component';
import { ViewCollectionComponent } from './collections/view-collection/view-collection.component';
import { DocumentsComponent } from './settings/documents/documents.component';
import { SettingsComponent } from './settings/settings/settings.component';
import { DocumentationService } from './settings/documentation.service';
import { DmcaComponent } from './settings/dmca/dmca.component';
import { DocManagementComponent } from './settings/doc-management/doc-management.component';


const appRoutes:Routes=[
  {
    path: 'settings',
    component: SettingsComponent
  },
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
  },  
  {
    path: 'mycosmos',
    component: ViewCollectionComponent
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
    ShowSearchComponent,
    PublicComponent,
    ViewCollectionComponent,
    DocumentsComponent,
    SettingsComponent,
    DmcaComponent,
    DocManagementComponent
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
  providers: [SampleService, AuthService, CookieService, SearchService, CollectService, DocumentationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
