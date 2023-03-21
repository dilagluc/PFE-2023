import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Semestre8Component } from './semestre8.component';

describe('Semestre8Component', () => {
  let component: Semestre8Component;
  let fixture: ComponentFixture<Semestre8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Semestre8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Semestre8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
