import { TestBed, inject } from '@angular/core/testing';

import { BurrowBackendService } from './burrow-backend.service';

describe('BurrowBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BurrowBackendService]
    });
  });

  it('should be created', inject([BurrowBackendService], (service: BurrowBackendService) => {
    expect(service).toBeTruthy();
  }));
});
