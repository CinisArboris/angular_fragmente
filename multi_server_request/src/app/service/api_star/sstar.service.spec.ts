import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { SStarService } from './sstar.service';

describe('SStarService', () => {
  let service: SStarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SStarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
