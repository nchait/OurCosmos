import { Component, OnInit } from '@angular/core';
import { DocumentationService} from '../documentation.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-doc-management',
  templateUrl: './doc-management.component.html',
  styleUrls: ['./doc-management.component.css']
})
export class DocManagementComponent implements OnInit {
  privacy;
  security;
  constructor(private docService:DocumentationService) { 
    this.docService.getDoc(this.onResponse.bind(this));         
  }
  onResponse(data){
    console.log(data[0].info);
    this.privacy = data[0].info;
    this.security = data[1].info;
  }
  ngOnInit() {
  }
  onPrivacy(form:NgForm){
    console.log(form.value.name);
  }
}
