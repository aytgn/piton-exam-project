import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
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
  clockChange: Subject<number> = new Subject();
  clockSubs: Subscription = new Subscription();
  choicesForm = new FormGroup({
    choice: new FormControl(''),
  });
  selectedChoiceValue: string = '';
  choices: string[] = [];
  userAnswersArr: string[] = [];
  clock: number = 5;
  clockInterval: any;

  //LIFECYCLE METHODS
  ngOnInit() {
    const questionId = this.route.snapshot.queryParams.questionId;
    this.paramChangeSubs = this.examService.paramChanged.subscribe(
      (questionId) => {
        let queryParams: Params = { questionId: this.questionId };
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: queryParams,
        });
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
    this.clockTick();
  }
  ngOnDestroy() {
    this.paramChangeSubs.unsubscribe();
    this.getQuestionsSubs.unsubscribe();
    this.clockSubs.unsubscribe();
    clearInterval(this.clockInterval);
  }
  //METHODS
  onSubmit() {}
  onAnswerClick() {
    this.userAnswersArr.push(this.selectedChoiceValue);
    this.questionId++;
    this.examService.paramChanged.next(this.questionId);
    this.clock = 5;
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
  clockTick() {
    this.clockInterval = this.clockInterval = setInterval(() => {
      if (this.clock > 0) {
        this.clock--;
      }
      if (this.clock <= 0) {
        alert('time is up!,confirm to proceed next question');
        this.questionId++;
        this.examService.paramChanged.next(this.questionId);
        this.clock = 5;
      }
      this.clockChange.next(this.clock);
    }, 1000);
  }
}
