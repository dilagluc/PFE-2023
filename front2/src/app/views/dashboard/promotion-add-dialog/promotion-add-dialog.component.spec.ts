import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionAddDialogComponent } from './promotion-add-dialog.component';

describe('PromotionAddDialogComponent', () => {
  let component: PromotionAddDialogComponent;
  let fixture: ComponentFixture<PromotionAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionAddDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
