import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Question } from 'src/app/models/exam.model';
import { ExamService } from 'src/app/services/exams.service';

@Component({
  selector: 'app-html-exam',
  templateUrl: './html-exam.component.html',
  styleUrls: ['./html-exam.component.css'],
})
export class HtmlExamComponent implements OnInit, OnDestroy {
  //CONSTRUCTOR
  constructor(
    private examService: ExamService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  //DEFINING AND INITIALIZING
  htmlQuestions: Question[] = [];
  questionId: number = 0;
  currentQuestion: Question = {
    questionId: 0,
    questionTitle: '',
    questionChoices: ['A', 'B', 'C', 'D'],
    correctValue: 'A',
  };
  paramChangeSubs: Subscription = new Subscription();
  getQuestionsSubs: Subscription = new Subscription();
  choicesForm = new FormGroup({
    choice: new FormControl(''),
  });
  selectedChoiceValue: string = '';
  choices: string[] = [];
  userAnswersArr: string[] = [];

  //LIFECYCLE METHODS
  ngOnInit() {
    const questionId = this.route.snapshot.queryParams.questionId;
    this.paramChangeSubs = this.examService.paramChanged.subscribe(
      (questionId) => {
        this.getQuestionsSubs = this.examService
          .getHtmlQuestions()
          .subscribe((questions: Question[]) => {
            this.htmlQuestions = questions;
            this.questionId = questionId;
            this.currentQuestion = <Question>questions.find((question) => {
              return question.questionId == this.questionId;
            });
            this.choices = this.currentQuestion.questionChoices;
          });
      }
    );
    this.examService.paramChanged.next(questionId);
    this.onChanges();
  }
  ngOnDestroy() {
    this.paramChangeSubs.unsubscribe();
    this.getQuestionsSubs.unsubscribe();
  }
  //METHODS
  onSubmit() {}
  onAnswerClick() {
    this.userAnswersArr.push(this.selectedChoiceValue);
    this.questionId++;
    const queryParams: Params = { questionId: this.questionId };
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
    });
    this.examService.paramChanged.next(this.questionId);
  }
  onChanges() {
    // not ngOnChanges!!
    this.choicesForm.valueChanges.subscribe((val) => {
      this.selectedChoiceValue = val.choice;
    });
  }
  onEndClick() {
    this.examService.setUserAnswers(this.userAnswersArr);
    this.router.navigate(['examHtml/results']);
  }
}
