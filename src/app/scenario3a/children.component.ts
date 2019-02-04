import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
      <button (click)="sendMessage()">Send Message</button>
  `,
  //styleUrls: ['./child.component.css']
})
export class ChildrenComponent {

  message: string = "This is a child message"

  @Output() mesgEvent = new EventEmitter<string>();

  constructor() { }

  sendMessage() {
    this.mesgEvent.emit(this.message)
  }
}