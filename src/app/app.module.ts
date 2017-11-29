import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import {SampleService} from './sample.service';
import { LoginComponent } from './login/login.component';
import { GetPicturesComponent } from './get-pictures/get-pictures.component'


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    LoginComponent,
    GetPicturesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
