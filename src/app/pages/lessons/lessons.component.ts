import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../../core/services/lessons.service';
import { Lesson } from '../../core/models/lesson.model';
import { Teacher } from '../../core/models/teacher.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css'],
})
export class LessonsComponent implements OnInit {
  constructor(private lessonService: LessonsService, private router: Router) {}
  //initialization
  lesson: Lesson = new Lesson(
    0,
    '0',
    '0',
    '0',
    [{ id: 0, name: '', videoPath: '' }],
    new Teacher('0', '0')
  );
  lessons: Lesson[] = [this.lesson];

  //lifeCycle
  ngOnInit() {
    this.lessons = this.lessonService.getLessons();
  }
}
