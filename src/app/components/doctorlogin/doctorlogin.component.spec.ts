import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorloginComponent } from './doctorlogin.component';

describe('DoctorloginComponent', () => {
  let component: DoctorloginComponent;
  let fixture: ComponentFixture<DoctorloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
