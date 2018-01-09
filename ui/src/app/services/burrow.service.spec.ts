import { TestBed, inject } from '@angular/core/testing';

import { BurrowService } from './burrow.service';

describe('BurrowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BurrowService]
    });
  });

  it('should be created', inject([BurrowService], (service: BurrowService) => {
    expect(service).toBeTruthy();
  }));
});
