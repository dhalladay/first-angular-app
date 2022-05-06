// this is where we will create the HTTP call as a service that can be used by multiple components instead of adding it to each component

export class CoursesService {
  getCourses() {
    // for now we don't want to do an actual request (there is no server)
    // to simulate, we'll add the array here
      return ["course1", "course2", "course3"]
  }
}

// These can also be generated using CLI
// 'ng g s <name>'
// it will create two files, <name>.service.ts and a spec.ts file for unit testing
// THIS DOES NOT PROVIDE THE SERVICE. It must be added to app.module.ts