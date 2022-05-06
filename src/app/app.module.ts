import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // we must register in providers all the dependencies that componenents in this module are dependent on
  providers: [
    // add CoursesService so it will work in courses.component
    // *****Singleton - when Angular is running this, it will only create one instance of CoursesService
    // if there are 100 components and 50 have CoursesService as a dependency,
    // there is still a single instance exists in the memory that all 50 will use. ****
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
