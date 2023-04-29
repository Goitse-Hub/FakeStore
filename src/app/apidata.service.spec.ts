import { TestBed } from '@angular/core/testing';

import { ApidataService } from './apidata.service';

describe('ApidataService', () => {
  let service: ApidataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApidataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
