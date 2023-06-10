import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [NgIf, NgFor],
  template: `
    <h1>I'm just an example</h1>

    <div *ngIf="showText">Hi, I'm a text</div>

    <button (click)="onClick()">Toggle</button>
  `,
  styles: [
    `
      :host {
        display: block;
        border: 1px solid red;
      }
    `,
  ],
})
export class AppExample {
  showText = false;

  onClick() {
    this.showText = !this.showText;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AppExample],
  template: ` <app-example /> `,
  styles: [
    `
      :host {
        display: block;
        border: 1px solid blue;
        padding: 16px;
      }
    `,
  ],
})
export class AppComponent {}
