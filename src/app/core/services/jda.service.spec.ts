import { TestBed } from '@angular/core/testing';

import { JDAService } from './jda.service';

describe('JDAService', () => {
  let service: JDAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JDAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
