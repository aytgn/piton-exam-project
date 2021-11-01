import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './pages/home/default.component';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { ExamsComponent } from './pages/exams/exams.component';
import { CourseComponent } from './pages/course/course.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SectionComponent } from './pages/lesson-section/section.component';
import { HtmlExamComponent } from './shared/html-exam/html-exam.component';
import { ResultsComponent } from './pages/results/results.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
  },
  {
    path: 'exams',
    component: ExamsComponent,
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
  {
    path: 'examHtml',
    component: HtmlExamComponent,
  },
  {
    path: 'examHtml/results',
    component: ResultsComponent,
  },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
