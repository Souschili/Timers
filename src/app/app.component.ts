import { Timer } from './models/mytimer';
import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myObserver$=interval(1000);
  //subscrption:Subscription
  listOfTimers:Array<Timer>
  constructor(){
    this.listOfTimers=[new Timer(1),new Timer(2), new Timer(3)];
  }

  // запуск таймера
  Start(value:Timer) {
    //this.subscrption=this.myObserver$.subscribe(()=> value.myTimer.setSeconds(value.myTimer.getSeconds() + 1));
    value.startTimer();
  }

  Stop(value:Timer){
    value.isWork=false;
    value.stopTimer();

  }
}

