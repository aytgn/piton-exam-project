import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LessonsComponent } from './lessons/lessons.component';
import { AppRoutingModule } from './app-routing.module';
import { LessonsService } from './services/lessons.service';
import { TeacherService } from './services/teachers.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseComponent } from './course/course.component';
import { SectionComponent } from './section/section.component';
import { SectionsService } from './services/sections.service';
import { HtmlExamComponent } from './exams/html-exam/html-exam.component';
import { RouterModule } from '@angular/router';
import { ExamsComponent } from './exams/exams.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultsComponent } from './results/results.component';

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
