import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
  courses = [ 
    {name : "course 1",isFavourite:true},
    {name : "course 2",isFavourite:false},
    {name : "course 3",isFavourite:false}
  ]
  getCourses(){
    return this.courses;
  }
}
