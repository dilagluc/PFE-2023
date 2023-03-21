import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScolarFormComponent } from './scolar-form.component';

describe('ScolarFormComponent', () => {
  let component: ScolarFormComponent;
  let fixture: ComponentFixture<ScolarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScolarFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScolarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
