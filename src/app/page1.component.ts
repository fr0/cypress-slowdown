import {Component} from '@angular/core';

@Component({
  template: `
    <button class="foo" (click)="click()">click me!</button>
    <div class="text">{{text}}</div>
  `,
  selector: 'adt-page1'
})
export class Page1Component {
  text = '';
  count = 0;

  click() {
    this.count++;
    this.text = `clicked ${this.count} time(s)`;
  }
}
