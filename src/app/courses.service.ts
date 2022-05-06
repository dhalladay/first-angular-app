// this is where we will create the HTTP call as a service that can be used by multiple components instead of adding it to each component

export class CoursesService {
  getCourses() {
    // for now we don't want to do an actual request (there is no server)
    // to simulate, we'll add the array here
      return ["course1", "course2", "course3"]
  }
}