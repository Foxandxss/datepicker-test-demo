import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date = '2019/08';

  next() {
    const dateParts = this.date.split('/');
    const date = new Date(+dateParts[0], +dateParts[1]);
    date.setMonth(date.getMonth() + 1);
    this.date = `${date.getFullYear()}/${date.getMonth()}`;
  }
}
