import { Component, OnInit } from '@angular/core';
import { JsonpService } from '../services/jsonp.service';

@Component({
  selector: 'app-outro-subcomp',
  templateUrl: './outro-subcomp.component.html',
  styleUrls: ['./outro-subcomp.component.css']
})
export class OutroSubcompComponent implements OnInit {

  jsonp: any;

  constructor(jsonp: JsonpService){
    this.jsonp = jsonp;
  }

  handleClick() {
    this.jsonp.servar++;
    this.jsonp.process1();
  }

  ngOnInit(): void {
  }

}
