import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Semestre10Component } from './semestre10.component';

describe('Semestre10Component', () => {
  let component: Semestre10Component;
  let fixture: ComponentFixture<Semestre10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Semestre10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Semestre10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
