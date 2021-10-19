import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './default/default.component';
import { LessonsComponent } from './lessons/lessons.component';
import { ExamsComponent } from './exams/exams.component';
import { CourseComponent } from './course/course.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SectionComponent } from './section/section.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
  },
  {
    path: 'lessons',
    component: LessonsComponent,
  },
  { path: 'lessons/:id', component: CourseComponent },
  {
    path: 'exams',
    component: ExamsComponent,
  },
  {
    path: 'lessons/:id/:sectionIndex',
    component: SectionComponent,
  },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
