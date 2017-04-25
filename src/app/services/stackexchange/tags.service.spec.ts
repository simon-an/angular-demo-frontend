import { inject, TestBed } from '@angular/core/testing';

import { HttpModule } from '@angular/http';
import { TagsService } from './tags.service';

describe('TagsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TagsService],
      imports: [HttpModule],
    });
  });

  it('should ...', inject([TagsService], (service: TagsService) => {
    expect(service).toBeTruthy();
    const result = service.getTags('java');

  }));
});
