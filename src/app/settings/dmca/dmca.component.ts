import { Component, OnInit } from '@angular/core';
import { CollectService } from '../../collections/collect.service'
@Component({
  selector: 'app-dmca',
  templateUrl: './dmca.component.html',
  styleUrls: ['./dmca.component.css']
})
export class DmcaComponent implements OnInit {
collectionsO;
  constructor( private collectService: CollectService) { 
    this.collectService.getDmca(this.onResponse.bind(this));//display all dmca complaints and allow user to restore or delete the collections
  }

  ngOnInit() {
  }
  onResponse(res){
    console.log(res);
    this.collectionsO=res.body;
  }
  onFix(index){
    this.collectService.fixDMCA(this.refresh.bind(this), this.collectionsO[index]._id);
  }
  onDelete(index){
    this.collectService.deleteCollection(this.refresh.bind(this), this.collectionsO[index]._id);
  }
  refresh(res){
    this.collectService.getDmca(this.onResponse.bind(this));    
  }

}
