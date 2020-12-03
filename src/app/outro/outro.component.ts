import { Component, OnInit } from '@angular/core';
import { JsonpService } from '../services/jsonp.service';

@Component({
  selector: 'app-outro',
  templateUrl: './outro.component.html',
  styleUrls: ['./outro.component.css']
})
export class OutroComponent implements OnInit {

  jsonp: any;

  constructor(jsonp: JsonpService){
    this.jsonp = jsonp;
  }

  ngOnInit(): void {
  }

}
