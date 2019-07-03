import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionType } from '../models/questionType';

@Injectable({
  providedIn: 'root'
})
export class QuestionTypesService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:3000/questionType';
  }

  getQuestionTypes() {
    return this.http.get<QuestionType[]>(this.apiUrl);
  }

}
