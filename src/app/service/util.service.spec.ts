import { TestBed } from '@angular/core/testing';

import { UtilService } from './util.service';

describe('UtilService', () => {
  let service: UtilService;

  beforeEach(() => {
    // this service is provided in root, so, in test module, we dont need to provide this service
    TestBed.configureTestingModule({});
    // TestBed.inject() get object instance from provider
    service = TestBed.inject(UtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('#getvalue should retrun real value', () => {
    expect(service.getValue()).toBe('real value');
  });

  it('#getObservableValue should return value from observable', (done: DoneFn) => {
    service.getObservableValue().subscribe(value => {
      expect(value).toBe('observable value');
      // done function Action method that should be called when the async work is complete.
      done();
    });
  });
  it('#getPromiseValue should return value from promise', (done: DoneFn) => {
    service.getPromiseValue().then(value => {
      expect(value).toBe('promise value');
      // done function Action method that should be called when the async work is complete.
      done();
    });
  });
});
