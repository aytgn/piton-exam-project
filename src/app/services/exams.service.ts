import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../models/exam.model';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ExamService {
  constructor(private http: HttpClient) {}

  paramChanged = new Subject<number>();
  private htmlAnswers: string[] = [];
  private userAnswers: string[] = [];

  getHtmlQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>('./assets/htmlQuiz.json').pipe(
      map((questionsObj: any) => {
        // just to transform object to array, 1 questionsObj!
        const questionsArr = questionsObj['questions'];
        return questionsArr;
      })
    );
  }

  getHtmlAnswers(): Observable<string[]> {
    return this.http.get<Question[]>('./assets/htmlQuiz.json').pipe(
      map((questionObj: any) => {
        const answers: string[] = [];
        const questions: Question[] = questionObj['questions'];
        questions.map((question) => {
          answers.push(question.correctValue);
        });
        this.htmlAnswers = answers;
        return answers;
      })
    );
  }

  setUserAnswers(userAnswers: string[]) {
    this.userAnswers = userAnswers;
  }

  getUserAnswers() {
    console.log(this.userAnswers);
    return this.userAnswers;
  }
}
