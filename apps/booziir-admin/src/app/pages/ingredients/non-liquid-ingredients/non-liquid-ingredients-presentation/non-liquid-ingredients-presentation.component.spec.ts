import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonLiquidIngredientsPresentationComponent } from './non-liquid-ingredients-presentation.component';

describe('NonLiquidIngredientsPresentationComponent', () => {
  let component: NonLiquidIngredientsPresentationComponent;
  let fixture: ComponentFixture<NonLiquidIngredientsPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonLiquidIngredientsPresentationComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonLiquidIngredientsPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
