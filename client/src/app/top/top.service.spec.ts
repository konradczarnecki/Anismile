import { TestBed, inject } from '@angular/core/testing';

import { TopService } from './top.service';

describe('TopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopService]
    });
  });

  it('should be created', inject([TopService], (service: TopService) => {
    expect(service).toBeTruthy();
  }));
});
