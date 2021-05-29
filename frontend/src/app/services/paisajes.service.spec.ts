import { TestBed } from '@angular/core/testing';

import { PaisajesService } from './paisajes.service';

describe('PaisajesService', () => {
  let service: PaisajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaisajesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
