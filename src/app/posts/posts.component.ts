import { Component, OnInit } from '@angular/core';
import { JsonpService } from '../services/jsonp.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  jsonp: JsonpService;

  myvar = 1;

  constructor(jsonp: JsonpService){
    this.jsonp = jsonp;
  }

  ngOnInit(): void {
  }

  otherop(){
    this.jsonp.doinc();
  }

  anotherop(){
    this.otherop();
    this.myvar = this.getmyvarloco();
  }

  getmyvarloco(){
    return this.myvar * 13;
  }

  handleInc(){
    console.log('inc click');
    this.myvar++;
    this.jsonp.servar++;
    this.jsonp.getPosts();
  }  
}
