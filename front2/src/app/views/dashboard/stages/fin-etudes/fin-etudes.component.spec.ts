import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinEtudesComponent } from './fin-etudes.component';

describe('FinEtudesComponent', () => {
  let component: FinEtudesComponent;
  let fixture: ComponentFixture<FinEtudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinEtudesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinEtudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
