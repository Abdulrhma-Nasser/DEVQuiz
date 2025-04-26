/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestKnowledgeComponent } from './test-knowledge.component';

describe('TestKnowledgeComponent', () => {
  let component: TestKnowledgeComponent;
  let fixture: ComponentFixture<TestKnowledgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestKnowledgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
