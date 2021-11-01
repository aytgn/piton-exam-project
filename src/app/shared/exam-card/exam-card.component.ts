import { Component, Input, OnInit } from '@angular/core';
import { Exam } from 'src/app/core/models/exam.model';

@Component({
  selector: 'app-exam-card',
  templateUrl: './exam-card.component.html',
  styleUrls: ['./exam-card.component.css'],
})
export class ExamCardComponent implements OnInit {
  constructor() {}
  @Input() exam: any;

  ngOnInit(): void {}
}
