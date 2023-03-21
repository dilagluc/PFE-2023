import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionRemoveDialogComponent } from './promotion-remove-dialog.component';

describe('PromotionRemoveDialogComponent', () => {
  let component: PromotionRemoveDialogComponent;
  let fixture: ComponentFixture<PromotionRemoveDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionRemoveDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionRemoveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
