import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './default/default.component';
import { LessonsComponent } from './lessons/lessons.component';
import { ExamsComponent } from './exams/exams.component';
import { CourseComponent } from './course/course.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
