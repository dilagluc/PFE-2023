import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Semestre5Component } from './semestre5.component';

describe('Semestre5Component', () => {
  let component: Semestre5Component;
  let fixture: ComponentFixture<Semestre5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Semestre5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Semestre5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
