import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2mesg',
  templateUrl: './scenario6.component.html',
  //styleUrls: ['./scenario6.component.css']
})
export class Component2Component implements OnInit {
  message = 'Message from  component2 child1!';

  constructor() { }

  ngOnInit() {
  }

}
