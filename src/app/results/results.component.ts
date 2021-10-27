import { Component, OnInit } from '@angular/core';
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
  //LIFECYCLE METHODS
  ngOnInit() {
    this.examsService.getHtmlAnswers().subscribe((answers) => {
      this.correctAnswers = answers;
    });
    this.userAnswers = this.examsService.getUserAnswers();
  }
  //METHODS
  trying() {
    console.log('correct', this.correctAnswers);
    console.log('userAnswers ', this.userAnswers);

    if (this.userAnswers.length === this.correctAnswers.length) {
      const answerChecks: boolean[] = [];
      for (const [i, answer] of this.userAnswers.entries()) {
        this.userAnswers[i] === this.correctAnswers[i]
          ? answerChecks.push(true)
          : answerChecks.push(false);
      }
      this.answerChecks = answerChecks;
      console.log(this.answerChecks);
    } else console.log('not all questions Answered!');
  }
}
