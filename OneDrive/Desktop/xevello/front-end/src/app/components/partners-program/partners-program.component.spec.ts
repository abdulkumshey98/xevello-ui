import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersProgramComponent } from './partners-program.component';

describe('PartnersProgramComponent', () => {
  let component: PartnersProgramComponent;
  let fixture: ComponentFixture<PartnersProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnersProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
