import { Timer } from './models/mytimer';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listOfTimers:Array<Timer>
  constructor(){
    this.listOfTimers=[new Timer(1),new Timer(2), new Timer(3)];
  }

  // запуск таймера
  Start(value:Timer) {
    value.StartTimer();
  }
}
