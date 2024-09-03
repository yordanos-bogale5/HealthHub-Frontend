import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsignupComponent } from './doctorsignup.component';

describe('DoctorsignupComponent', () => {
  let component: DoctorsignupComponent;
  let fixture: ComponentFixture<DoctorsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorsignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
