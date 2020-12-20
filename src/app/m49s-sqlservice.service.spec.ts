import { TestBed } from '@angular/core/testing';

import { M49sSQLserviceService } from './m49s-sqlservice.service';

describe('M49sSQLserviceService', () => {
  let service: M49sSQLserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(M49sSQLserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
