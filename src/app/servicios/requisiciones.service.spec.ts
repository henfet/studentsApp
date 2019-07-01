import { TestBed } from '@angular/core/testing';

import { RequisicionesService } from './requisiciones.service';

describe('RequisicionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequisicionesService = TestBed.get(RequisicionesService);
    expect(service).toBeTruthy();
  });
});
