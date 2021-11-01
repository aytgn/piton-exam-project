import { Injectable } from '@angular/core';

import { Section } from '../models/section.model';

Injectable();
export class SectionsService {
  constructor() {}

  private htmlSections: Section[] = [
    {
      id: 0,
      name: 'Introducing HTML',
      videoPath: 'https://www.youtube.com/embed/qz0aGYrrlhU',
    },
    {
      id: 1,
      name: 'HTML elements',
      videoPath: 'https://www.youtube.com/embed/qz0aGYrrlhU',
    },
    {
      id: 2,
      name: 'HTML practice',
      videoPath: 'https://www.youtube.com/embed/qz0aGYrrlhU',
    },
    {
      id: 3,
      name: 'Create Your First Site',
      videoPath: 'https://www.youtube.com/embed/qz0aGYrrlhU',
    },
  ];

  private cssSections: Section[] = [
    {
      id: 0,
      name: 'Introducing CSS',
      videoPath: 'https://www.youtube.com/embed/yfoY53QXEnI',
    },
    {
      id: 1,
      name: 'CSS Selectors',
      videoPath: 'https://www.youtube.com/embed/yfoY53QXEnI',
    },
    {
      id: 2,
      name: 'CSS Practice',
      videoPath: 'https://www.youtube.com/embed/yfoY53QXEnI',
    },
    {
      id: 3,
      name: 'Integrate CSS Your Site',
      videoPath: 'https://www.youtube.com/embed/yfoY53QXEnI',
    },
  ];

  private jsSections: Section[] = [
    {
      id: 0,
      name: 'Introducing JS',
      videoPath: 'https://www.youtube.com/embed/hdI2bqOjy3c',
    },
    {
      id: 1,
      name: 'JS Objects',
      videoPath: 'https://www.youtube.com/embed/hdI2bqOjy3c',
    },
    {
      id: 2,
      name: 'JS Functions',
      videoPath: 'https://www.youtube.com/embed/hdI2bqOjy3c',
    },
    {
      id: 3,
      name: 'Integrate Js Your Site',
      videoPath: 'https://www.youtube.com/embed/hdI2bqOjy3c',
    },
  ];

  getSections(lessonId: number): Section[] {
    if (lessonId == 0) {
      return this.htmlSections.slice();
    } else if (lessonId == 1) {
      return this.cssSections.slice();
    } else if (lessonId == 2) {
      return this.jsSections.slice();
    } else return this.htmlSections.slice();
  }
}
