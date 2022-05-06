import { Injectable } from '@angular/core';

// you need this decorator if there are dependencies in the constructor
// this allows dependecies to be injected into the constructor
// hence the name
@Injectable({
  providedIn: 'root'
})
export class EmailService {
// example of a service with a dependency (this doesn't exist)
  // constructor(logService: LogService) { }
  constructor() { }
}
