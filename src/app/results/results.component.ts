import { Component, OnInit } from '@angular/core';
import { Question } from '../models/exam.model';
import { ExamService } from '../services/exams.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  constructor(private examsService: ExamService) {}

  answerChecks: boolean[] = [];
  correctAnswers: string[] = [];
  userAnswers: string[] = [];
  questions: Question[] = [];
  //LIFECYCLE METHODS
  ngOnInit() {
    this.examsService.getHtmlQuestions().subscribe((questions: Question[]) => {
      this.questions = questions;
    });
    this.examsService.getHtmlAnswers().subscribe((answers) => {
      this.correctAnswers = answers;
    });
    this.userAnswers = this.examsService.getUserAnswers();
    this.checkAnswers();
  }

  //METHODS
  checkAnswers() {
    if (this.userAnswers.length === this.correctAnswers.length) {
      const answerChecks: boolean[] = [];
      for (const [i, answer] of this.userAnswers.entries()) {
        this.userAnswers[i] === this.correctAnswers[i]
          ? answerChecks.push(true)
          : answerChecks.push(false);
      }
      this.answerChecks = answerChecks;
    } else console.log('not all questions Answered!');
    console.log(this.answerChecks);
  }
  trying() {
    this.checkAnswers();
  }
}
