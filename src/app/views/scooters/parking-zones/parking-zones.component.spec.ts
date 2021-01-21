import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingZonesComponent } from './parking-zones.component';

describe('ParkingZonesComponent', () => {
  let component: ParkingZonesComponent;
  let fixture: ComponentFixture<ParkingZonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingZonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
