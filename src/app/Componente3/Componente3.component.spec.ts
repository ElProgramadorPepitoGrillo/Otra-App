/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Componente3Component } from './Componente3.component';

describe('Componente3Component', () => {
  let component: Componente3Component;
  let fixture: ComponentFixture<Componente3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Componente3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Componente3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
