import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonLiquidModalComponent } from './non-liquid-modal.component';

describe('NonLiquidModalComponent', () => {
  let component: NonLiquidModalComponent;
  let fixture: ComponentFixture<NonLiquidModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonLiquidModalComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonLiquidModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
