import { TestBed } from '@angular/core/testing';

import { SparkPlugsService } from './spark-plugs.service';

describe('SparkPlugsService', () => {
  let service: SparkPlugsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SparkPlugsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
