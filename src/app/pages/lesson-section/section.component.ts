import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Section } from '../../core/models/section.model';
import { LessonsService } from '../../core/services/lessons.service';
import { SectionsService } from '../../core/services/sections.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent implements OnInit {
  constructor(
    private sectionsService: SectionsService,
    private lessonsService: LessonsService,
    private activatedRoute: ActivatedRoute,
    private _sanitizer: DomSanitizer
  ) {}

  sectionName: string = '';
  sectionIndex: number = 0;
  lessonId: number = 0;
  videoPath: string = '';
  safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.youtube.com/embed/4NRXx6U8ABQ'
  );
  ngOnInit(): void {
    //get index of section and id of lesson from url
    this.activatedRoute.params.subscribe((param) => {
      this.sectionIndex = param['sectionIndex'];
      this.lessonId = param['id'];
    });
    //get sectionName corresponding lesson's section.
    this.sectionName = this.sectionsService.getSections(this.lessonId)[
      this.sectionIndex
    ].name;
    // get videoPath corresponding lesson's section.
    this.videoPath = this.sectionsService.getSections(this.lessonId)[
      this.sectionIndex
    ].videoPath;
    //
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(
      this.videoPath
    );
  }
}
