import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../models/exam.model';
import { map, tap } from 'rxjs/operators';
import { Observable, Subject, Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ExamService {
  constructor(private http: HttpClient) {}

  paramChanged = new Subject<number>();
  private userAnswers: string[] = [];

  setUserAnswers(answers: string[]) {
    this.userAnswers = answers;
  }

  getUserAnswers() {
    return this.userAnswers;
  }

  getHtmlQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>('./assets/htmlQuiz.json').pipe(
      map((questionsObj: any) => {
        // just to transform object to array, 1 questionsObj!
        const questionsArr = questionsObj['questions'];
        return questionsArr;
      })
    );
  }

  getHtmlAnswers() {
    return this.http.get('./assets/htmlQuiz.json').pipe(
      map((questionObj: any) => {
        const answers: string[] = [];
        const questions: Question[] = questionObj['questions'];
        questions.map((question) => {
          answers.push(question.correctValue);
        });
        return answers;
      })
    );
  }
}
