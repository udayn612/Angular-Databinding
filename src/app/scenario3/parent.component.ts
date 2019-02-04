import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
    <app-scenario3 [childMessage]='parentMessage'> </app-scenario3>
  `
})

export class ParentComponent {
    parentMessage = 'Welcome message from parent';
  constructor() { }
}
