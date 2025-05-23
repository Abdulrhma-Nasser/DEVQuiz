/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainQuizComponent } from './main-quiz.component';

describe('MainQuizComponent', () => {
  let component: MainQuizComponent;
  let fixture: ComponentFixture<MainQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
