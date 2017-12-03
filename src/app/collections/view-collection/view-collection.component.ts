import { Component, OnInit } from '@angular/core';
import {SampleService} from '../../sample.service';
import {SampleComponent} from '../../sample/sample.component';
import {SearchService} from '../../pictures/search.service';
import {NgForm} from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router'; 
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DialogService } from "ng2-bootstrap-modal";
import { CollectService } from '../../collections/collect.service';
import { concat } from 'rxjs/observable/concat';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-collection',
  templateUrl: './view-collection.component.html',
  styleUrls: ['./view-collection.component.css']
})
export class ViewCollectionComponent implements OnInit {
  // Initialize response with empty string
  info;
  response = '';
  fill = '';
  show = 0;
  selected =0;
  pictures = new Array(100);
  currentpic = 1;
  theNew=0;
  collections;
  collectionsO;
  owner;
  toEdit=-1;
  numbers = [0,1,2,3,4,5,6,7,8,9,10];
  rateValidity;
  constructor(private collectService: CollectService, private dialogService:DialogService, private modalService: NgbModal, private authService:AuthService, private _sampleService: SampleService, private _searchService: SearchService) {
    //this._sampleService.getData(this.onResponse.bind(this),'');
    //this._searchService.getPrevData(this.onSearchReturn.bind(this));
    this.authService.checkCookie(this.onAuth.bind(this));
    this.collectService.getPublics(this.showPics.bind(this));
    this.info = this.authService.getInfo();
    console.log(this.info);
    this.currentpic =1;}
  ngOnInit(  ){}
  edit(index){
    this.toEdit=index;
  }
  rate(collO, value){
    console.log(collO);
    console.log(value);
  }
  onChange(form: NgForm){
    this.collections[this.toEdit].descrip = form.value.myDescrip;
    this.collections[this.toEdit].open = form.value.myPublic;
    this.collections[this.toEdit].name = form.value.myName;
    this.collectService.updateCollection(this.refresh.bind(this), this.collections[this.toEdit]); 
    this.toEdit=-1;   
  }
  deleteColl(index){
    this.collectService.deleteCollection(this.refresh.bind(this), this.collections[index]._id);     
  }
  deleteFromColl(){
    var newArray = [];
    this.pictures.forEach(element => {
      if (this.pictures[this.currentpic]==element){

      }else{
        newArray.push(element);
      }
    });
    console.log(this.pictures);
    console.log(newArray);
    if (newArray.length == 0){
      this.validity = "you cant delete your last picture!";
      return;
    }
    this.pictures=newArray;
    this.collections[this.index].pictures=newArray;
    this.collectService.updateCollection(this.refresh.bind(this), this.collections[this.index])
  }
  editAdmin(form: NgForm){

  }
  refresh(res){
    this.collectService.getPublics(this.showPics.bind(this)); 
    this.collectService.getCollections(this.setCollections.bind(this),this.info)     
  }
  index;
  view(index, owner) {
    console.log()
    this.currentpic =0;    
    this.show=1;
    this.owner=owner;
    if (owner){
      this.index=index;
      console.log(this.collections);
      this.pictures=this.collections[index].pictures;
      
    } else {
      console.log(this.collectionsO);      
      this.pictures=this.collectionsO[index].pictures;
    }
  }
  onAuth(theInfo){
    this.info=theInfo;
    if (theInfo==undefined){
      this.info = 0;
    }
    console.log('usernme: '+theInfo);   
    if(this.info!=1){
      this.collectService.getCollections(this.setCollections.bind(this),this.info) 
    }
  }
  showPics(res){
    console.log(res);
    if (res>10){
      this.collectionsO=res.slice(0,10);
    }else {
      this.collectionsO=res;      
    }

    console.log(this.collectionsO.length);
    
  }
  setCollections(res){
    console.log(res);
    this.collections=res.body;
    console.log ('setcollections called, '+ this.collections);
    console.log(this.info);
  }
  myCollection;
  addto(index){
    //console.log(index);
    this.collections[index].pictures.push(this.pictures[this.currentpic]);
    console.log(this.collections[index]);
    this.collectService.addCollections(this.confirmAdd.bind(this),this.collections[index]);     
  }
  confirmAdd(res){
    if (res==222){
      this.validity = 'error serverside!';
    } else if (res==200){
      this.validity = 'Success';
    }else {
      this.validity = 'Inexplicable Error';
    }  
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
  revealNew(x){
    this.theNew=x;
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
      this.collectService.getCollections(this.setCollections.bind(this),this.info);
      this.collectService.getPublics(this.showPics.bind(this));      
      this.theNew=0;      
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
