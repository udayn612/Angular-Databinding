import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Scenario4Component } from './scenario4.component';



@Component({
    selector: 'app-parentmsg',
    template: `
    Message {{message}}
    <app-scenario4> </app-scenario4>
  `
})

export class ParentmsgComponent implements AfterViewInit{
  @ViewChild(Scenario4Component) child;
  constructor() { }
  message: string;
  ngAfterViewInit() {
    this.message = this.child.message;
    }
}
