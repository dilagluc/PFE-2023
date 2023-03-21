import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Semestre6Component } from './semestre6.component';

describe('Semestre6Component', () => {
  let component: Semestre6Component;
  let fixture: ComponentFixture<Semestre6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Semestre6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Semestre6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
