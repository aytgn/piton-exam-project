import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lesson } from '../../core/models/lesson.model';
import { LessonsService } from '../../core/services/lessons.service';
import { Section } from '../../core/models/section.model';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private lessonsService: LessonsService
  ) {}

  id: number = 0;
  lesson: Lesson = this.lessonsService.getLessons()[0];
  sections: Section[] = [{ id: 0, name: '', videoPath: '' }];

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      let id = params.get('id');
      if (id) {
        this.id = +id;
      }
    });
    this.lesson = this.lessonsService.getLessons()[this.id];
    this.sections = this.lesson.sections;
  }
}
