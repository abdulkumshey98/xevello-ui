import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingPosComponent } from './billing-pos.component';

describe('BillingPosComponent', () => {
  let component: BillingPosComponent;
  let fixture: ComponentFixture<BillingPosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingPosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
