import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoholicIngredientsPresentationComponent } from './alcoholic-ingredients-presentation.component';

describe('AlcoholicIngredientsPresentationComponent', () => {
  let component: AlcoholicIngredientsPresentationComponent;
  let fixture: ComponentFixture<AlcoholicIngredientsPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlcoholicIngredientsPresentationComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcoholicIngredientsPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
