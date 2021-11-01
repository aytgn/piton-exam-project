//angular
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//models
import { LessonsService } from 'src/app/core/services/lessons.service';
import { Lesson } from '../../core/models/lesson.model';
import { Teacher } from 'src/app/core/models/teacher.model';

@Component({
  selector: 'app-lessonCard',
  templateUrl: './lessonCard.component.html',
  styleUrls: ['./lessonCard.component.css'],
})
export class LessonCardComponent {
  constructor(private lessonService: LessonsService, private router: Router) {}
  //initialization
  @Input() lesson: Lesson = {
    id: 0,
    name: '',
    imgPath: '',
    description: '',
    sections: [],
    teacher: { firsName: '', lastName: '' },
  };
  //myFunctions
  goLessonPage(id: number): void {
    this.router.navigate(['/lessons/' + id]);
  }
}
