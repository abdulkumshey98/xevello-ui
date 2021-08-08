import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailPosComponent } from './retail-pos.component';

describe('RetailPosComponent', () => {
  let component: RetailPosComponent;
  let fixture: ComponentFixture<RetailPosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailPosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
