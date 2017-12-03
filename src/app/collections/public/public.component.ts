import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { CollectService } from '../collect.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
  collectionsO;
  constructor(private collectService: CollectService) {
    this.collectService.getPublics(this.show.bind(this))
  }
  show(res){
    console.log(res);
    if (res>10){
      this.collectionsO=res.slice(0,10);
    }else {
      this.collectionsO=res;      
    }

    console.log(this.collectionsO.length);
    
  }
  ngOnInit() {

  }

}
