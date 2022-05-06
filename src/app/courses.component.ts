// Basic steps to create and display a componenet. 
// 1. Registor module (all the stuff in courses.component.ts) 
// 2. Add componenet in the declarations array (in app.modules.ts)
// 3. Added courses element in the app.component.html

// Problems with this approach. It's a lot of steps for each component. 
// First you have to create the typescript class, then import the component decorator
// and then you had to apply it on the typescript class

import { Component } from '@angular/core'; 
import { CoursesService } from './courses.service';

// decorator function starts with '@...'
@Component({
  selector: 'courses', // <div id="courses"> your selector would be "#courses" use '.' for class. Basic CSS selectors
// string interpolation {{}}
// ****directives**** directives are a building blocks allow us to manipulate the dom
// we can add, remove or change classes and style of elements.
// whenever you are using a directive that modifies the *structure* dom, you should prefix it with *
// then add ngFor=""
// "let course of courses" is basically a for each loop for the courses object that you are exporting
  template: `
  <h2>{{ getTitle() }}<h2>
  <ul>
    <li *ngFor="let course of courses">
      {{ course }}
    </li>
  </ul>
  `
})
export class CoursesComponent {
  title ="List of courses";
  courses

  getTitle() {
    return this.title;
  }

  // logic for calling an HTTP service
  // this is bad because it tightly couples the CoursesServices. It will have to be updated every time and can't be unit tested
  // constructor() {
    //   let service = new CoursesService();
    //   this.courses = service.getCourses()
    // }
    
    // it's best to make the CoursesService a dependency of the constructor
    // when you use the new operator in a class, you have tightly coupled your class to the implementation
    // but when you add a dependency, you have decoupled them.
  constructor(service: CoursesService) {
    this.courses = service.getCourses()
    // dependency injection - injecting, or providing, the depencies of a class to it's constructor
    // this must be done in app.module.ts, win the providers array.
    // if you see ERROR error: No provider for <service>! this step has probably been skipped.
  }
}

// instead of doing that, you can use the angular CLI
// in the command line type 'ng g c <name of component>'
// g: generate
// c: component
// angluar CLI will create a directory and add css, ts, html, spec files
// it also updates app.module