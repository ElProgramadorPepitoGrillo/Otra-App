/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Componente1Component } from './Componente1.component';

describe('Componente1Component', () => {
  let component: Componente1Component;
  let fixture: ComponentFixture<Componente1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Componente1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Componente1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
