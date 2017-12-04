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
  constructor(private docService:DocumentationService) {   }//three forms, one for each document to tell the service to 
  validity
  onResponse(data){
    if(data = 200){
      this.validity='success, reload to see!'
    }
  }
  ngOnInit() {
  }
  onPrivacy(form:NgForm){
    console.log(form.value.val);
    this.docService.changeDoc(this.onResponse.bind(this), form.value.val, '5a24750ac2f567cf10d03334');             
  }
  onSecurity(form:NgForm){
    console.log(form.value.val);
    this.docService.changeDoc(this.onResponse.bind(this), form.value.val, '5a2477ddc2f567cf10d03335');             
  }
  onDmca(form:NgForm){
    console.log(form.value.val);
    this.docService.changeDoc(this.onResponse.bind(this), form.value.val, '5a2490bc991275cfce7cbef2');             
  }
}
