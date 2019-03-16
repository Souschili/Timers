
import { interval, Subscription } from 'rxjs';

export class Timer {

id:number;
 myTimer = new Date();
 source=interval(1000);
 // к чему будем цепляться извне для подписки
 subscribe:Subscription

 constructor(id:number) {
   // обнулили таймер
    this.myTimer.setHours(0,0,0,0);
    this.id=id;
 }

 StartTimer(){
  this.subscribe=this.source.subscribe(()=> this.myTimer.setSeconds(this.myTimer.getSeconds()+1));
 }

}
