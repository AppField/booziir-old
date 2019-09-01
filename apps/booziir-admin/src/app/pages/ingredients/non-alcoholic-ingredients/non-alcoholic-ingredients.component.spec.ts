import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAlcoholicIngredientsComponent } from './non-alcoholic-ingredients.component';

describe('NonAlcoholicIngredientsComponent', () => {
  let component: NonAlcoholicIngredientsComponent;
  let fixture: ComponentFixture<NonAlcoholicIngredientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonAlcoholicIngredientsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonAlcoholicIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
