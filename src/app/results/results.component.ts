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

  questionsSub: Subscription = new Subscription();
  correctAnswersSub: Subscription = new Subscription();
  correctAnswers: string[] = [];
  userAnswers: string[] = [];
  questions: Question[] = [];
  examPoint: number = 0;
  numberOfCorrectAnswers: number = 0;
  //LIFECYCLE METHODS
  ngOnInit() {
    this.userAnswers = this.examsService.getUserAnswers();
    this.correctAnswersSub = this.examsService
      .getHtmlAnswers()
      .subscribe((answers) => {
        this.correctAnswers = answers;
      });
    this.questionsSub = this.examsService
      .getHtmlQuestions()
      .subscribe((questions: Question[]) => {
        this.questions = questions;
        console.log('questions length:', this.questions.length);
        for (let [i, question] of questions.entries()) {
          if (question.correctValue === this.userAnswers[i]) {
            this.numberOfCorrectAnswers++;
          }
        }
        this.examPoint = this.getExamPoint(
          this.numberOfCorrectAnswers,
          this.questions.length
        );
      });
  }
  ngOnDestroy() {
    this.correctAnswersSub.unsubscribe();
    this.questionsSub.unsubscribe();
  }
  //METHODS
  getExamPoint(numberOfCorrectAnswers: number, examLength: number) {
    if (examLength != 0) {
      return (numberOfCorrectAnswers * 100) / examLength;
    } else {
      return 0;
    }
  }
}
