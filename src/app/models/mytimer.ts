import { timer } from 'rxjs/internal/observable/timer';

export class Timer {
  
id:number;
 myTimer = new Date();
 // к чему будем цепляться извне для подписки
 source;

 constructor(id:number) {

   // обнулили таймер
    this.myTimer.setHours(0,0,0,0);
   this.id=id;
   this.source = timer(1000, 1000);
 }


}
