import { TestBed, inject } from '@angular/core/testing';

import { GetPicturesService } from './get-pictures.service';

describe('GetPicturesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPicturesService]
    });
  });

  it('should be created', inject([GetPicturesService], (service: GetPicturesService) => {
    expect(service).toBeTruthy();
  }));
});
