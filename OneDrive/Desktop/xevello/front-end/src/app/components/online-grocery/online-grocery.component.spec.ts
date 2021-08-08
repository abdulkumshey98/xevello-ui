import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineGroceryComponent } from './online-grocery.component';

describe('OnlineGroceryComponent', () => {
  let component: OnlineGroceryComponent;
  let fixture: ComponentFixture<OnlineGroceryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineGroceryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineGroceryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
