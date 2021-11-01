import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DefaultComponent } from './pages/home/default.component';
import { NavbarComponent } from './shared/navbar-vertical/navbar.component';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { AppRoutingModule } from './app-routing.module';
import { LessonsService } from './core/services/lessons.service';
import { TeacherService } from './core/services/teachers.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseComponent } from './pages/course/course.component';
import { SectionComponent } from './pages/lesson-section/section.component';
import { SectionsService } from './core/services/sections.service';
import { HtmlExamComponent } from './shared/html-exam/html-exam.component';
import { RouterModule } from '@angular/router';
import { ExamsComponent } from './pages/exams/exams.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultsComponent } from './pages/results/results.component';
import { LessonCardComponent } from './shared/lesson-card/lessonCard.component';
import { SectionBarComponent } from './shared/section-bar/section-bar.component';
import { ExamCardComponent } from './shared/exam-card/exam-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DefaultComponent,
    LessonsComponent,
    CourseComponent,
    SectionComponent,
    HtmlExamComponent,
    ExamsComponent,
    ResultsComponent,
    LessonCardComponent,
    SectionBarComponent,
    ExamCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [LessonsService, TeacherService, SectionsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
