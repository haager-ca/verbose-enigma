import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryBlockComponent } from './battery-block.component';

describe('BatteryBlockComponent', () => {
  let component: BatteryBlockComponent;
  let fixture: ComponentFixture<BatteryBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatteryBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatteryBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
