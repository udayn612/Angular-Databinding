
import { Component } from '@angular/core';

@Component({
  selector: 'app-parentchild',
  templateUrl: './scenario3a.component.html',
  //styleUrls: ['./scenario3a.component.css']
})

export class Scenario3aComponent {
  constructor() { }
  message:string;

  receiveMessage(event) {
    this.message = event
  }
}
