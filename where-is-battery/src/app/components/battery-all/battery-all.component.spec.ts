import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryAllComponent } from './battery-all.component';

describe('BatteryAllComponent', () => {
  let component: BatteryAllComponent;
  let fixture: ComponentFixture<BatteryAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatteryAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatteryAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
