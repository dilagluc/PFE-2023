import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Semestre7Component } from './semestre7.component';

describe('Semestre7Component', () => {
  let component: Semestre7Component;
  let fixture: ComponentFixture<Semestre7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Semestre7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Semestre7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
