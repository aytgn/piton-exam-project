import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExamService } from 'src/app/core/services/exams.service';
import { Exam } from 'src/app/core/models/exam.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css'],
})
export class ExamsComponent implements OnInit, OnDestroy {
  constructor(private examService: ExamService) {}

  //initialize
  exams: Exam[] = [];
  examsSub: Subscription = new Subscription();
  //lifeCycles
  ngOnInit() {
    this.examsSub = this.examService.getExams().subscribe((exams: any) => {
      //make them array!
      this.exams = Object.values(exams);
    });
  }

  ngOnDestroy() {
    this.examsSub.unsubscribe();
  }
}
