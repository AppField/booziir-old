import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPopoverContentComponent } from './menu-popover-content.component';

describe('MenuPopoverContentComponent', () => {
  let component: MenuPopoverContentComponent;
  let fixture: ComponentFixture<MenuPopoverContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPopoverContentComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPopoverContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
