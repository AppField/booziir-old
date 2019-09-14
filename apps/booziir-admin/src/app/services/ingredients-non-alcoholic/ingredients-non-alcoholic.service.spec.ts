import { TestBed } from '@angular/core/testing';

import { IngredientsNonAlcoholicService } from './ingredients-non-alcoholic.service';

describe('IngredientsNonAlcoholicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IngredientsNonAlcoholicService = TestBed.get(IngredientsNonAlcoholicService);
    expect(service).toBeTruthy();
  });
});
