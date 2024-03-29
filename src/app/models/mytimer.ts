
import { interval, Subscription } from 'rxjs';
import { takeWhile, tap } from 'rxjs/operators';
import { ɵplatformCoreDynamicTesting } from '@angular/platform-browser-dynamic/testing';

export class Timer {

 id:number;
 isWork:boolean;
 myTimer = new Date();
 // Подписка на него
 sub$:Subscription;



 constructor(id:number) {
   // обнулили таймер
    this.myTimer.setHours(0,0,0,0);
    this.id=id;
    this.isWork=false;
 }

 // Альтернативое решение ,оставил на всякий
 startTimer(){
  this.sub$=interval(1000).subscribe(()=> this.myTimer.setSeconds(this.myTimer.getSeconds()+1));

 }

 stopTimer(){
  this.sub$.unsubscribe();
 }

}
