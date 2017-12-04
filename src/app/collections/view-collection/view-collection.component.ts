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
export class ViewCollectionComponent implements OnInit {//my cosmos screen
  // Initialize response with empty string
  validity;//collection related output
  index;//current collection being viewed
  info;//username
  response = '';//output for user
  show = 0;//show the slider
  pictures = new Array(100);//pictures showing
  currentpic = 0;//index of current picture
  theNew=0;//the new collection window variable
  collections;//my collections
  collectionsO;//public collections
  owner;//owner of current collection, if so allows you to remove a picture
  toEdit=-1;//edit window not open
  numbers = [1,2,3,4,5,6,7,8,9,10];//for ratings
  rateValidity;//output for the rating
  constructor(private collectService: CollectService, private dialogService:DialogService, private modalService: NgbModal, private authService:AuthService, private _sampleService: SampleService, private _searchService: SearchService) {
    this.authService.checkCookie(this.onAuth.bind(this));//are we signed in
    this.collectService.getPublics(this.setPublics.bind(this));//get the public collections
    this.info = this.authService.getInfo();//try to get the username quickly
    console.log(this.info);
    this.currentpic =0;
  }
  ngOnInit(  ){}
  edit(index){//open the edit collection window and set the collection your editting
    this.toEdit=index;
  }
  rate(collO, value){
    this.collectService.rateCollection(this.onRate.bind(this), this.collectionsO[collO]._id, this.info, value+1 );  //rate a collection   
  }
  onRate(res){
    console.log('result from rate: '+ res);
    if (res==200){
      this.rateValidity = 'rating submitted';//output response
    } else if (res==230){
      this.rateValidity = 'rating adjusted';
    }
    this.refresh(res);//refresh the ratings
  }
  onChange(form: NgForm){
    this.collections[this.toEdit].descrip = form.value.myDescrip;//submit edits of collection
    this.collections[this.toEdit].open = form.value.myPublic;
    this.collections[this.toEdit].name = form.value.myName;
    this.collectService.updateCollection(this.refresh.bind(this), this.collections[this.toEdit]); 
    this.toEdit=-1;   
  }
  deleteColl(index){//delete a collection
    this.collectService.deleteCollection(this.refresh.bind(this), this.collections[index]._id); 
  }
  deleteFromColl(){
    var newArray = [];//remove a picture from the collection
    this.pictures.forEach(element => {
      if (this.pictures[this.currentpic]==element){

      }else{
        newArray.push(element);
      }
    });
    console.log(this.pictures);
    console.log(newArray);
    if (newArray.length == 0){
      this.validity = "you cant delete your last picture!";//no empty collections
      return;
    }
    this.pictures=newArray;
    this.collections[this.index].pictures=newArray;
    this.collectService.updateCollection(this.refresh.bind(this), this.collections[this.index]);
  }
  refresh(res){//refresh resets the collections
    this.collectService.getPublics(this.setPublics.bind(this)); 
    this.collectService.getCollections(this.setCollections.bind(this),this.info);     
  }
  report(index) {//report a collection
    this.collectService.sendDMCA(this.refresh.bind(this), this.collectionsO[index]._id);    
  }  
  view(index, owner) {//view a collection
    console.log()
    this.currentpic =0;    
    this.show=1;
    this.owner=owner;
    if (owner){// my own
      this.index=index;
      console.log(this.collections);
      this.pictures=this.collections[index].pictures;
    } else {//public
      console.log(this.collectionsO);      
      this.pictures=this.collectionsO[index].pictures;
    }
  }
  onAuth(theInfo){//set username and if signed in get my own collections
    this.info=theInfo;
    if (theInfo==undefined){
      this.info = 0;
    }
    console.log('usernme: '+theInfo);   
    if(this.info!=1){
      this.collectService.getCollections(this.setCollections.bind(this),this.info) 
    }
  }
  setPublics(res){//sort and display the public collections
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < res.length-1; i++) {
          var x1 = res[i].publicRating;
          if (x1==undefined){
            x1=0;
          }
          var x2 = res[i+1].publicRating;
          if (x2==undefined){
            x2=0;
          }
          if (x1< x2) {
              var temp = res[i];
              res[i] = res[i+1];
              res[i+1] = temp;
              swapped = true;
          }
        }
    } while (swapped);
    this.collectionsO=res;      
    console.log(this.collectionsO.length);
  }
  setCollections(res){//set my collections
    console.log(res);
    this.collections=res.body;
    console.log ('setcollections called, '+ this.collections);
    console.log(this.info);
  }
  addto(index){//add a picure to a collection
    //console.log(index);
    this.collections[index].pictures.push(this.pictures[this.currentpic]);
    console.log(this.collections[index]);
    this.collectService.addCollections(this.confirmAdd.bind(this),this.collections[index]);     
  }
  confirmAdd(res){//callback from add to collection
    if (res==222){
      this.validity = 'error server side!';
    } else if (res==200){
      this.validity = 'Success';
    }else {
      this.validity = 'Inexplicable Error';
    }  
  }
  onSelect(index){
    this.show=0;
    console.log(index);
    this.currentpic = index;//select a pic from the slider
    this.show=1;
  }
  revealNew(x){//show the collection creation window
    this.theNew=x;
  }
  onCreate(form: NgForm){  //submit new collection
    this.collectService.newCollection(this.afterCreate.bind(this), 
                                      form.value.public, 
                                      form.value.name, 
                                      form.value.descrip, 
                                      this.pictures[this.currentpic], 
                                      this.info);   
   
  }
  afterCreate(res){
    if (res==220){
      this.validity = 'choose a new name';
    } else if (res==200){
      this.validity = 'Success';//on response from create collections
      this.collectService.getCollections(this.setCollections.bind(this),this.info);
      this.collectService.getPublics(this.setPublics.bind(this));      
      this.theNew=0;      
    }else {
      this.validity = 'Inexplicable Error';
    }
  }
  next(){//next image
    this.show=0;
    this.currentpic++;
    if (this.pictures[this.currentpic]==undefined){
      this.currentpic = 0;
    }
    this.show=1;    
  }
  prev(){//previous image
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
