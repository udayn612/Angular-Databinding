import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Component1Component } from './component1.component';



@Component({
    selector: 'app-parentchild2msg',
    template: `
    Message {{message}}
  <app-component1msg>
  </app-component1msg>
  `
})

export class Component3Component implements AfterViewInit {
  @ViewChild(Component1Component) child;
  constructor() { }
  message: string;
  ngAfterViewInit() {
    this.message = this.child.message;
    }
}
