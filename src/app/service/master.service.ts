import { Injectable } from '@angular/core';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  // master service has a dependency called utilService
  constructor(private util: UtilService) {
  }
  public getValue(): string {
    return this.util.getValue();
  }
}
