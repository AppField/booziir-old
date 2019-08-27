import { async, TestBed } from '@angular/core/testing';
import { TranslateTestingModule } from './translate-testing.module';

describe('TranslateTestingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateTestingModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TranslateTestingModule).toBeDefined();
  });
});
