import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
   //selector: 'app-course-list',
   // template: '<h2>Course List</h2>' // Insere conteudo HTML, por etica até 5 linhas
   templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{

   _courses: Course[] = []; // Herda a estrutura do elemento no arquivo course.ts

   filteredCourses: Course[] = []

   _filterBy!: string // Informa que a Variavel ficara somente nesse componente
   course: any;

   constructor(private courseService: CourseService) { }
   
   ngOnInit(): void {
      this._courses = this.courseService.retriveAll()
      this.filteredCourses = this._courses
   }

   set filter(value: string) {
      this._filterBy = value

      this.filteredCourses = this._courses.filter(
         (course: Course) => course.name
            .toLocaleLowerCase()
            .indexOf(this._filterBy.toLocaleLowerCase()) > -1 )
   }

   get filter() {
      return this._filterBy
   }

}