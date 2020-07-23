import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';

describe('MasterService', () => {
  let service: MasterService;

  beforeEach(() => {
    // because of the dependency of master.service is util service, the UtilService is provided in root,
    // so , in testBed, we dont need to provide the utilService.
    // but, in this condition, 
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('#getValue should return real value', () => {
    expect(service.getValue()).toBe('real value');
  });
});
