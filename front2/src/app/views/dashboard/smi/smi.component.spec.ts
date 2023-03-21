import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmiComponent } from './smi.component';

describe('SmiComponent', () => {
  let component: SmiComponent;
  let fixture: ComponentFixture<SmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
