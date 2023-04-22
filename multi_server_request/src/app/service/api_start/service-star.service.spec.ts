import { TestBed } from '@angular/core/testing';

import { ServiceStarService } from './service-star.service';

describe('ServiceStarService', () => {
  let service: ServiceStarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceStarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
