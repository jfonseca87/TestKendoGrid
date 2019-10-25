import { TestBed } from '@angular/core/testing';

import { MechanicalIntegrityService } from './mechanical-integrity.service';

describe('MechanicalIntegrityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MechanicalIntegrityService = TestBed.get(MechanicalIntegrityService);
    expect(service).toBeTruthy();
  });
});
