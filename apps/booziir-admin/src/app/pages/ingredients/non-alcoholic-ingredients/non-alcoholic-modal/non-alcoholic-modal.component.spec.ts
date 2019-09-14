import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAlcoholicModalComponent } from './non-alcoholic-modal.component';

describe('NonAlcoholicModalComponent', () => {
  let component: NonAlcoholicModalComponent;
  let fixture: ComponentFixture<NonAlcoholicModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonAlcoholicModalComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonAlcoholicModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
