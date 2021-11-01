import { Injectable } from '@angular/core';
import { Teacher } from '../models/teacher.model';

@Injectable()
export class TeacherService {
  constructor() {}

  //Teachers
  private aytuTeacher: Teacher = new Teacher('Aytugan', 'Özgan');
  private iremTeacher: Teacher = new Teacher('İrem', 'Olcay');
  private armağanTeacher: Teacher = new Teacher('Armağan', 'Şahin');

  //Teachers List
  private teachers: Teacher[] = [
    this.aytuTeacher,
    this.iremTeacher,
    this.armağanTeacher,
  ];

  getTeachers(): Teacher[] {
    return this.teachers.slice();
  }
}
