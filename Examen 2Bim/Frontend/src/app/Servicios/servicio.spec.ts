import { TestBed, inject } from '@angular/core/testing';

import { Servicio } from './servicio';

describe('Servicio', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Servicio]
    });
  });

  it('should be created', inject([Servicio], (service: Servicio) => {
    expect(service).toBeTruthy();
  }));
});
