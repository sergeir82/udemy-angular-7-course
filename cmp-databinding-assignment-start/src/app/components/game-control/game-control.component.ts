import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() change = new EventEmitter<number>();

  private timerHandler: number;
  private counter = 0;

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.onStop();
    this.timerHandler = setInterval(() => this._increment(), 1000);
  }

  onStop() {
    if (this.timerHandler) {
      clearInterval(this.timerHandler);
    }
  }

  private _increment() {
    this.counter += 1;
    this.change.emit(this.counter);
  }
}
