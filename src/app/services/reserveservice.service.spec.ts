import { TestBed } from '@angular/core/testing';

import { ReserveserviceService } from './reserveservice.service';

describe('ReserveserviceService', () => {
  let service: ReserveserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReserveserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
