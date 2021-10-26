import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlExamComponent } from './html-exam.component';

describe('HtmlExamComponent', () => {
  let component: HtmlExamComponent;
  let fixture: ComponentFixture<HtmlExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
