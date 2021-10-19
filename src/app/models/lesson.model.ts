import { Teacher } from './teacher.model';
import { Section } from './section.model';

export class Lesson {
  constructor(
    public id: number,
    public name: string,
    public imgPath: string,
    public description: string,
    public sections: Section[],
    public teacher: Teacher
  ) {}
}
