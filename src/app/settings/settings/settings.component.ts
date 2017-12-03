import { Component, OnInit } from '@angular/core';
import { DocumentationService } from '../documentation.service'
import { AuthService } from '../../auth/auth.service'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  info;
  constructor(private authService:AuthService, private docService: DocumentationService) { 
    this.authService.checkCookie(this.onAuth.bind(this));
    
  }

  ngOnInit() {
  }
  onAuth(theInfo){
    this.info=theInfo;
    if (theInfo==undefined){
      this.info = 0;
    }
    console.log('usernme: '+theInfo);   
  }
}
