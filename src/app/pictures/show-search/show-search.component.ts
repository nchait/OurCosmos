import { Component, OnInit } from '@angular/core';
import {SampleService} from '../../sample.service';
import {SampleComponent} from '../../sample/sample.component';
import {SearchService} from '../search.service';
import {NgForm} from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router'; 
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DialogService } from "ng2-bootstrap-modal";
import { CollectService } from '../../collections/collect.service';
import { concat } from 'rxjs/observable/concat';
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
  selected =0;
  sampleTypeList= ['x', 'y', 'z'];
  pictures = new Array(100);
  currentpic = 1;
  theNew=0;
  constructor(private collectService: CollectService, private dialogService:DialogService, private modalService: NgbModal, private authService:AuthService, private _sampleService: SampleService, private _searchService: SearchService) {
    //this._sampleService.getData(this.onResponse.bind(this),'');
    this._searchService.getPrevData(this.onSearchReturn.bind(this));
    this.authService.checkCookie(this.onAuth.bind(this));
    this.info = this.authService.getInfo();
    console.log(this.info);
    this.currentpic =1
  }

  ngOnInit() {
  }
  onAuth(theInfo){
    this.info=theInfo;
    if (theInfo==undefined){
      this.info = 0;
    }
    console.log(theInfo);   
    if(this.info!=1){
      this.collectService.getCollections(this.setCollections.bind(this),this.info) 
    }
  }
  collections
  setCollections(res){
    console.log(res);
    this.collections=res.body;
  }
  onClick() {

  }
  addto(index){
    console.log(index);
  }
  onSelect(index){
    this.show=0;
    console.log(index);
    this.currentpic = index;
    this.show=1;
  }
  onSearch(form: NgForm){
    console.log(form.value.search);
    this._searchService.getData(this.onSearchReturn.bind(this),encodeURI(form.value.search));
    this.show=0;
    this.currentpic=0;
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
    this.currentpic=0;
  }
  revealNew(){
    this.theNew=1;
  }
  onCreate(form: NgForm){
    this.collectService.newCollection(this.afterCreate.bind(this), 
                                      form.value.public, 
                                      form.value.name, 
                                      form.value.descrip, 
                                      this.pictures[this.currentpic], 
                                      this.info);    
  }
  validity;
  afterCreate(res){
    if (res==220){
      this.validity = 'choose a new name';
    } else if (res==200){
      this.validity = 'Success';
    }else {
      this.validity = 'Inexplicable Error';
    }
  }
  next(){
    this.show=0;
    this.currentpic++;
    if (this.pictures[this.currentpic]==undefined){
      this.currentpic = 0;
    }
    this.show=1;    
  }
  prev(){
    this.show=0;
    this.currentpic--;
    console.log(this.currentpic);
    if (this.currentpic<0){
      this.currentpic = 99;
      while(this.pictures[this.currentpic]==undefined){
        console.log(this.currentpic);        
        this.currentpic--;
        if (this.currentpic==0){

          break;
        }
      }
      console.log(this.currentpic);    
    }
    this.show=1;
    
  }


}
