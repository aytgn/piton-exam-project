import { Teacher } from './teacher.model';

export class Lesson {
  constructor(
    public id: number,
    public name: string,
    public imgPath: string,
    public description: string,
    public teacher: Teacher
  ) {}
}
