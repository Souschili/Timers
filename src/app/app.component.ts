import { interval } from 'rxjs';
import { Timer } from './models/mytimer';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // 1 секундный интервал
  source=interval(1000);
  // массив таймеров
  listOfTimers:Array<Timer>
  // я так понимаю это наблюдатель
  subscripe;






  constructor(){
    this.listOfTimers=[new Timer(1),new Timer(2), new Timer(3)];
  }


  // запуск таймера
  Start(value:Timer) {

    // цепляемся к внутренему соурсу и изменяем значение ,без него пока незнаю как обойтись
    this.subscripe=value.source.subscribe(val=> value.myTimer.setSeconds(value.myTimer.getUTCSeconds()+1) );
  }
}
