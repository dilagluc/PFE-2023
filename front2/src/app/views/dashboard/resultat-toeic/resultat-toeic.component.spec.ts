import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatToeicComponent } from './resultat-toeic.component';

describe('ResultatToeicComponent', () => {
  let component: ResultatToeicComponent;
  let fixture: ComponentFixture<ResultatToeicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultatToeicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultatToeicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
