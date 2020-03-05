import { TestBed } from '@angular/core/testing';

import { ViewreviewService } from './viewreview.service';

describe('ViewreviewService', () => {
  let service: ViewreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
