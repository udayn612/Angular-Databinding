import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scenario3',
  templateUrl: './scenario3.component.html',
  styleUrls: ['./scenario3.component.css']
})



export class Scenario3Component implements OnInit {
  @Input() childMessage: string;

  constructor() { }
  ngOnInit() {
  }
}
