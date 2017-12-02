import { Component, OnInit } from '@angular/core';
import {SampleService} from '../../sample.service';
import {SearchService} from '../search.service';
import {NgForm} from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.css']
})
export class ShowSearchComponent implements OnInit {
  // Initialize response with empty string
  info;
  response = '';
  fill = '';
  show = 0;
  pictures = new Array(100);
  constructor(private authService:AuthService, private _sampleService: SampleService, private _searchService: SearchService) {
    //this._sampleService.getData(this.onResponse.bind(this),'');
    this._searchService.getPrevData(this.onSearchReturn.bind(this));
    this.authService.checkCookie(this.onAuth.bind(this));
    this.info = this.authService.getInfo();
    console.log(this.info);
  }
  ngOnInit() {
  }
  onAuth(theInfo){
    this.info=theInfo;
    if (theInfo==undefined){
      this.info = 0;
    }
    console.log(theInfo);    
  }
  onClick() {

  }
  onSelect(form: NgForm){
    console.log(form);
    console.log(form.value.pic);
  }
  onSearch(form: NgForm){
    console.log(form.value.search);
    this._searchService.getData(this.onSearchReturn.bind(this),encodeURI(form.value.search));
    this.show=0;

  }
  onResponse(res) {
    //console.log(res);
    this.pictures=res;

  }
  onSearchReturn(res) {
    console.log(res);
    this.pictures=res;
    console.log(this.pictures);
    this.show=1;
    

  }


}
