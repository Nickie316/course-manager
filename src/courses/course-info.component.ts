import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from "@angular/core";

@Component({
   templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

   courseId!: number;

   constructor(private activatedRoute: ActivatedRoute) { }

   ngOnInit(): void{
      this.courseId = this.activatedRoute.snapshot.paramMap.get('id')
   }

}