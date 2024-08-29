import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientprofileComponent } from './patientprofile.component';

describe('PatientprofileComponent', () => {
  let component: PatientprofileComponent;
  let fixture: ComponentFixture<PatientprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientprofileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
