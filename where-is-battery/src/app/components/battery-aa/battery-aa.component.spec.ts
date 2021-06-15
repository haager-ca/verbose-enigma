import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryAaComponent } from './battery-aa.component';

describe('BatteryAaComponent', () => {
  let component: BatteryAaComponent;
  let fixture: ComponentFixture<BatteryAaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatteryAaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatteryAaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
