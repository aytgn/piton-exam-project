import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonsService } from '../services/lessons.service';
import { SectionsService } from '../services/sections.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent implements OnInit {
  constructor(
    private sectionsService: SectionsService,
    private lessonsService: LessonsService,
    private activatedRoute: ActivatedRoute
  ) {}

  sectionName: string = '';
  sectionIndex: number = 0;
  lessonId: number = 0;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.sectionIndex = param['sectionIndex'];
      this.lessonId = param['id'];
    });
    this.sectionName = this.sectionsService.getSections(this.lessonId)[
      this.sectionIndex
    ].name;
  }
}
