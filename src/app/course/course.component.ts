import { BuiltinTypeName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  
  ngOnInit(): void {
    
  }

  constructor(service : CourseService){
    this.courses = service.getCourses();
  }

  title ="List of courses";
  courses: any;
  isActive= true;

  onClick(){
    console.log("button was clicekd");
    this.isActive = !this.isActive;
  }

}
