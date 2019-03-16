
import { interval } from 'rxjs';
import { takeWhile, tap } from 'rxjs/operators';
import { ɵplatformCoreDynamicTesting } from '@angular/platform-browser-dynamic/testing';

export class Timer {

 id:number;
 isWork:boolean;
 myTimer = new Date();
 source=interval(1000);


 constructor(id:number) {
   // обнулили таймер
    this.myTimer.setHours(0,0,0,0);
    this.id=id;
    this.isWork=false;
 }

 startTimer(){
  //this.source.subscribe(()=> this.myTimer.setSeconds(this.myTimer.getSeconds()+1));

 }

 stopTimer(){



 }

}
