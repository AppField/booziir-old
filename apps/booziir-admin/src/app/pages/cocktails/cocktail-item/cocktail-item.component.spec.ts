import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailItemComponent } from './cocktail-item.component';

describe('CocktailItemComponent', () => {
  let component: CocktailItemComponent;
  let fixture: ComponentFixture<CocktailItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CocktailItemComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
