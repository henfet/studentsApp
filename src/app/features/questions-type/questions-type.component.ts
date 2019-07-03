import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { QuestionType } from '../../models/questionType';
import { QuestionTypesService } from '../../servicios/question-types.service';

@Component({
  selector: 'app-questions-type',
  templateUrl: './questions-type.component.html',
  styleUrls: ['./questions-type.component.css']
})
export class QuestionsTypeComponent implements OnInit {
  questionTypes: QuestionType[];

  constructor(private _questionTypesService: QuestionTypesService, private router: Router) { }

  ngOnInit() {
    this.getQuestionTypes();
  }

  getQuestionTypes() {
    this._questionTypesService.getQuestionTypes().subscribe(data => {
      this.questionTypes = data;
    })
  }

}
