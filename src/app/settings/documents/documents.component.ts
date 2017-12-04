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
dmca;
  constructor(private docService:DocumentationService) { //simply get and show docs
    this.docService.getDoc(this.onResponse.bind(this));     
  }

  ngOnInit() {
  }
  onResponse(data){
    console.log(data[0].info);
    this.privacy = data[1].info;
    this.security = data[2].info;
    this.dmca = data[0].info;
  }
}
