import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Question } from '../models/exam.model';
import { ExamService } from '../services/exams.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit, OnDestroy {
  constructor(private examsService: ExamService) {}

  correctAnswersSub: Subscription = new Subscription();
  correctAnswers: string[] = [];
  userAnswers: string[] = [];
  questions: Question[] = [];
  //LIFECYCLE METHODS
  ngOnInit() {
    this.userAnswers = this.examsService.getUserAnswers();
    this.correctAnswersSub = this.examsService
      .getHtmlAnswers()
      .subscribe((answers) => {
        this.correctAnswers = answers;
        console.log(this.correctAnswers);
      });
  }
  ngOnDestroy() {
    this.correctAnswersSub.unsubscribe();
  }

  //METHODS
}
