import { Timer } from './models/mytimer';
import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listOfTimers:Array<Timer>
  stopWatch:Timer;

  constructor(){
    this.listOfTimers=[new Timer(1),new Timer(2), new Timer(3)];
    // взял стандартный таймер,не буду же пилить новую модель
    this.stopWatch=new Timer(4);
  }

  // запуск таймера или стопватча
  timerStart(value:Timer) {
    value.isWork=true;
    // если айди не равен 4 то это обычный таймер
    if(value.id!=4){
      value.sub$=interval(1000).subscribe(()=> value.myTimer.setSeconds(value.myTimer.getSeconds()+1))
    }else{
      value.sub$=interval(10).subscribe(()=> value.myTimer.setMilliseconds(value.myTimer.getMilliseconds()+10))
    }

    // ниже второй вариант,закоментируй строчку выше,и раскоментируй код

    //value.startTimer();
  }

  // остановка таймера
  timerStop(value:Timer){
    value.isWork=false;
    value.sub$.unsubscribe();
    // ниже второй вариант,закоментируй строчку выше,и раскоментируй код
    //value.stopTimer();
  }

  // очищаем таймер
  clearTimer(value:Timer){
    value.myTimer.setHours(0,0,0,0);
  }


}

