import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ParentchildComponent } from './parentchild.component';



@Component({
    selector: 'app-grandparent',
    template: `
    Message {{message}}
       <app-parentchildmsg>
    </app-parentchildmsg>
  `
})

export class GrandparentComponent implements AfterViewInit {
  @ViewChild(ParentchildComponent) child;
  constructor() { }
  message: string;
  ngAfterViewInit() {
    this.message = this.child.message;
    }
}
