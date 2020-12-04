import { Injectable } from '@angular/core';
import { MasterService } from './master.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonpService {

  url = 'https://jsonplaceholder.typicode.com/posts';
  // url = 'http://127.0.0.1:5000/consulta';

  servar = 0;

  posts:any = null;

  private master;

  constructor(private http: HttpClient, master: MasterService) {     
    this.master = master;
    console.log('jsonp init');
    this.getPosts();
  }

  doinc(){
    console.log('doing inc');
    this.servar++;
  }

  getservar(){
    return 10 * this.servar;
  }

  process1(){
    console.log('process 1');
    this.master.message1();
  }

  getPosts() {
    this.http.get(this.url).subscribe((resp) => {
      this.posts = resp;
    })
  }
}
