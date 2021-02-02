import { TestBed } from '@angular/core/testing';

import { RickNMortyService } from './rick-n-morty.service';

describe('RickNMortyService', () => {
  let service: RickNMortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickNMortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
