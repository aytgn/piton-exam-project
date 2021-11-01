import { Component, OnInit } from '@angular/core';
import { ExamService } from 'src/app/core/services/exams.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
})
export class DefaultComponent implements OnInit {
  constructor(private examService: ExamService) {}
  ngOnInit() {
    this.examService.getExams().subscribe((exams) => {
      console.log(exams);
    });
  }
}
