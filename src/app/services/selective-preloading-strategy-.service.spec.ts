import { TestBed, inject } from '@angular/core/testing';

import { SelectivePreloadingStrategyService } from './selective-preloading-strategy-.service';

describe('SelectivePreloadingStrategyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectivePreloadingStrategyService]
    });
  });

  it('should ...', inject([SelectivePreloadingStrategyService], (service: SelectivePreloadingStrategyService) => {
    expect(service).toBeTruthy();
  }));
});
