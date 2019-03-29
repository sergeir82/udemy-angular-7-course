import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onInterval(val: number) {
    if (val % 2) {
      this.oddNumbers.push(val);

      return;
    }

    this.evenNumbers.push(val);
  }
}
