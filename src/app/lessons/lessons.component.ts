import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../services/lessons.service';
import { Lesson } from '../models/lesson.model';
import { Teacher } from '../models/teacher.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css'],
})
export class LessonsComponent implements OnInit {
  constructor(private lessonService: LessonsService, private router: Router) {}
  //initialization
  lesson: Lesson = new Lesson(0, '0', '0', '0', [''], new Teacher('0', '0'));
  lessons: Lesson[] = [this.lesson];

  //myFunctions
  goLessonPage(id: number): void {
    this.router.navigate(['/lessons/' + id]);
  }

  ngOnInit() {
    this.lessons = this.lessonService.getLessons();
  }
}
