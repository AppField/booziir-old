import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAlcoholicIngredientsPresentationComponent } from './non-alcoholic-ingredients-presentation.component';

describe('NonAlcoholicIngredientsPresentationComponent', () => {
  let component: NonAlcoholicIngredientsPresentationComponent;
  let fixture: ComponentFixture<NonAlcoholicIngredientsPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonAlcoholicIngredientsPresentationComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonAlcoholicIngredientsPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
