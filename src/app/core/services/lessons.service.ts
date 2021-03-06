import { Injectable } from '@angular/core';

import { Lesson } from '../models/lesson.model';
import { TeacherService } from './teachers.service';
import { Section } from '../models/section.model';
import { SectionsService } from './sections.service';

@Injectable()
export class LessonsService {
  constructor(
    private teachersService: TeacherService,
    private sectionsService: SectionsService
  ) {}
  //Lesson
  private htmlLesson: Lesson = new Lesson(
    0,
    'HTML COURSE',
    '../assets/html-course-logo.png',
    'Consectetur esse qui nisi enim nulla amet commodo enim Lorem culpa. Exercitation esse officia id anim amet occaecat sit ipsum culpa. Sit id velit velit labore ex Lorem Lorem. Irure duis ex fugiat reprehenderit est proident excepteur nostrud Lorem nulla Lorem qui. Mollit fugiat dolore nulla eiusmod irure amet nulla cillum magna do.',
    this.sectionsService.getSections(0),
    this.teachersService.getTeachers()[0]
  );
  //Lesson
  private cssLesson: Lesson = new Lesson(
    1,
    'CSS COURSE',
    '../assets/css-course-logo.jpg',
    'Tempor excepteur aliquip aliqua voluptate velit id. Voluptate consectetur non ullamco tempor magna sit commodo exercitation. Amet ad qui mollit elit labore dolor laborum velit ipsum sunt. Sit laborum fugiat aliqua sint. Nulla proident reprehenderit laborum irure velit adipisicing incididunt irure reprehenderit duis elit.',
    this.sectionsService.getSections(1),
    this.teachersService.getTeachers()[1]
  );
  //Lesson
  private jsLesson: Lesson = new Lesson(
    2,
    'JS COURSE',
    '../assets/js-course-logo.png',
    'Nisi voluptate esse fugiat quis. Ex consequat aliqua voluptate ullamco laboris. Aliqua nulla ea sit est. Enim aliqua dolore sit voluptate. Ullamco enim eiusmod occaecat duis consectetur ad reprehenderit proident ex proident ex minim laboris. Laborum aute cillum proident ea labore cillum do in eiusmod culpa. Qui ea consectetur pariatur ea ex nulla tempor.',
    this.sectionsService.getSections(2),
    this.teachersService.getTeachers()[2]
  );

  //Lessons List
  private lessons: Lesson[] = [this.htmlLesson, this.cssLesson, this.jsLesson];
  getLessons(): Lesson[] {
    return this.lessons.slice();
  }
}
