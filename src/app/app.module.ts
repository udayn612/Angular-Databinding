import { Component3Component } from './scenario6/component3.component';
import { Component2Component } from './scenario6/component2.component';
import { Component1Component } from './scenario6/component1.component';
import { ParentchildComponent } from './scenario5/parentchild.component';

import { ChildrenComponent } from './scenario3a/children.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { Scenario1Component } from './scenario1/scenario1.component';
import { Scenario2Component } from './scenario2/scenario2.component';
import { Scenario3Component } from './scenario3/scenario3.component';
import { ParentComponent } from './scenario3/parent.component';
import { Scenario4Component } from './scenario4/scenario4.component';
import { ParentmsgComponent } from './scenario4/parentmesg.component';
import { Scenario3aComponent } from './scenario3a/scenario3a.component';
import { GrandparentComponent } from './scenario5/grandparent.component';
import { Scenario5Component } from './scenario5/scenario5.component';




@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    Scenario1Component,
    Scenario2Component,
    Scenario3Component,
    ParentComponent,
    Scenario4Component,
    ParentmsgComponent,
    Scenario3aComponent,
    ChildrenComponent,
    GrandparentComponent,
    ParentchildComponent,
    Scenario5Component,
    Component1Component,
    Component2Component,
    Component3Component
    
 
  
     
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

