import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContactPage } from './new-contact.page';

describe('NewContactPage', () => {
  let component: NewContactPage;
  let fixture: ComponentFixture<NewContactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewContactPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
