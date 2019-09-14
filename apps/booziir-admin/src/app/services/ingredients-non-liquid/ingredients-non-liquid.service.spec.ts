import { TestBed } from '@angular/core/testing';

import { IngredientsNonLiquidService } from './ingredients-non-liquid.service';

describe('IngredientsNonLiquidService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IngredientsNonLiquidService = TestBed.get(IngredientsNonLiquidService);
    expect(service).toBeTruthy();
  });
});
