import { Component, OnInit } from '@angular/core';
import { DocumentationService} from '../documentation.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
privacy;
security;
  constructor(private docService:DocumentationService) { 
    this.docService.getDoc(this.onResponse.bind(this));     
  }

  ngOnInit() {
  }
  onResponse(data){
    console.log(data[0].info);
    this.privacy = data[0].info;
    this.security = data[1].info;
  }
}
