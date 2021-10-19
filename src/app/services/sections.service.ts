import { Injectable } from '@angular/core';

import { Section } from '../models/section.model';

Injectable();
export class SectionsService {
  constructor() {}

  private htmlSections: Section[] = [
    { id: 0, name: 'Introducing HTML', videoPath: 'www.youtube.com' },
    { id: 1, name: 'HTML elements', videoPath: 'www.youtube.com' },
    { id: 2, name: 'HTML practice', videoPath: 'www.youtube.com' },
    { id: 3, name: 'Create Your First Site', videoPath: 'www.youtube.com' },
  ];

  private cssSections: Section[] = [
    { id: 0, name: 'Introducing CSS', videoPath: 'www.youtube.com' },
    { id: 1, name: 'CSS Selectors', videoPath: 'www.youtube.com' },
    { id: 2, name: 'CSS Practice', videoPath: 'www.youtube.com' },
    { id: 3, name: 'Integrate CSS Your Site', videoPath: 'www.youtube.com' },
  ];

  private jsSections: Section[] = [
    { id: 0, name: 'Introducing JS', videoPath: 'www.youtube.com' },
    { id: 1, name: 'JS Objects', videoPath: 'www.youtube.com' },
    { id: 2, name: 'JS Functions', videoPath: 'www.youtube.com' },
    { id: 3, name: 'Integrate Js Your Site', videoPath: 'www.youtube.com' },
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
