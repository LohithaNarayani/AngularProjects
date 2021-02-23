import { TestBed } from '@angular/core/testing';

import { AuthactiveGuard } from './authactive.guard';

describe('AuthactiveGuard', () => {
  let guard: AuthactiveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthactiveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
