import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryAaaComponent } from './battery-aaa.component';

describe('BatteryAaaComponent', () => {
  let component: BatteryAaaComponent;
  let fixture: ComponentFixture<BatteryAaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatteryAaaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatteryAaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
