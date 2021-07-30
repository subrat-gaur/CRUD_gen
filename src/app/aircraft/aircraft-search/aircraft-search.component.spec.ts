import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftSearchComponent } from './aircraft-search.component';

describe('AircraftSearchComponent', () => {
  let component: AircraftSearchComponent;
  let fixture: ComponentFixture<AircraftSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AircraftSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AircraftSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
