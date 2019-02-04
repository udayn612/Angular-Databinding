import { Component } from '@angular/core';

@Component({
    selector:  'app-click-me' , // <courses>   <div id="courses"> "courses"
    // template: '<h2>{{ title }}</h2>'
    // template: '<h2>{{ "Title:" + title }}</h2>'
     template: `
            <h2>{{ getTitle() }}</h2>
            <ul>
            <li *ngFor="let course of courses">
            {{ course }}
            </li>
            </ul>
            <button (click)="onClickMe()">Click me!</button>
            {{clickMessage}}
            `
})
export class CoursesComponent {
    title = 'List of courses';
    courses = ['Angular', 'JavaScript', 'JAVA', 'Bootstrap'];
    clickMessage = '';

    getTitle() {
        return this.title;
    }

  onClickMe() {
    this.clickMessage = 'Welcome to Angular !!!';
  }


// tslint:disable-next-line:eofline
}