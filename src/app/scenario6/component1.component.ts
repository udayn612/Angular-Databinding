import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Component2Component } from './component2.component';



@Component({
    selector: 'app-component1msg',
    template: `
       <app-component2mesg></app-component2mesg>
  `
})

export class Component1Component implements AfterViewInit {
  @ViewChild(Component2Component) child;
  constructor() { }
  message: string;
  ngAfterViewInit() {
    this.message = this.child.message;
    }
}

