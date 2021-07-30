import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftShellComponent } from './aircraft-shell.component';

describe('AircraftShellComponent', () => {
  let component: AircraftShellComponent;
  let fixture: ComponentFixture<AircraftShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AircraftShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AircraftShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
