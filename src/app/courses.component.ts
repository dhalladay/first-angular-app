// Basic steps to create and display a componenet. 
// 1. Registor module (all the stuff in courses.component.ts) 
// 2. Add componenet in the declarations array (in app.modules.ts)
// 3. Added courses element in the app.component.html

// Problems with this approach. It's a lot of steps for each component. 
// First you have to create the typescript class, then import the component decorator
// and then you had to apply it on the typescript class

import { Component } from '@angular/core'; 

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

  getTitle() {
    return this.title;
  }

  courses = ["course1", "course2", "course3"]
}

// instead of doing that, you can use the angular CLI
// in the command line type 'ng g c <name of component>'
// g: generate
// c: component
// angluar CLI will create a directory and add css, ts, html, spec files
// it also updates app.module