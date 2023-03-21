import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Semestre9Component } from './semestre9.component';

describe('Semestre9Component', () => {
  let component: Semestre9Component;
  let fixture: ComponentFixture<Semestre9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Semestre9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Semestre9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
