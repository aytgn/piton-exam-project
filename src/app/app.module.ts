import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LessonsComponent } from './lessons/lessons.component';
import { AppRoutingModule } from './app-routing.module';
import { LessonsService } from './services/lessons.service';
import { TeacherService } from './services/teachers.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DefaultComponent,
    LessonsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [LessonsService, TeacherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
