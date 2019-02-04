import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Scenario5Component } from './scenario5.component';



@Component({
    selector: 'app-parentchildmsg',
    template: `
       <app-scenario5> </app-scenario5>
  `
})

export class ParentchildComponent implements AfterViewInit {
  @ViewChild(Scenario5Component) child;
  constructor() { }
  message: string;
  ngAfterViewInit() {
    this.message = this.child.message;
    }
}
