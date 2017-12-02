import { Component, OnInit } from '@angular/core';
import {SampleService} from '../../sample.service';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.css']
})
export class ShowSearchComponent implements OnInit {
  // Initialize response with empty string
  response = '';
  fill = '';
  pictures = new Array(100);
  constructor(private _sampleService: SampleService, private _searchService: SearchService) {
    //this._sampleService.getData(this.onResponse.bind(this),'');
    this._searchService.getData(this.onResponse.bind(this),'');
  }

  ngOnInit() {
  }
  
  onClick() {
  }

  onResponse(res) {
    //console.log(res);
    this.pictures=res;


  }


}
