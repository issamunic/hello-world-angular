import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
  courses = [ 
    "course 1",
    "course 2",
    "course 3"
  ]
  getCourses(){
    return this.courses;
  }
}
