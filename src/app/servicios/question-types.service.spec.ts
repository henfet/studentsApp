import { TestBed } from '@angular/core/testing';

import { QuestionTypesService } from './question-types.service';

describe('QuestionTypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionTypesService = TestBed.get(QuestionTypesService);
    expect(service).toBeTruthy();
  });
});
