import { TestBed } from '@angular/core/testing';

import { IngredientsAlcoholicService } from './ingredients-alcoholic.service';

describe('IngredientsAlcoholicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IngredientsAlcoholicService = TestBed.get(IngredientsAlcoholicService);
    expect(service).toBeTruthy();
  });
});
