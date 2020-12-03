import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  private mastervar = 0;

  constructor() { }

  message1(){
    console.log('message 1 done');
    this.mastervar++;
  }

}
