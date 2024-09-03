import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDoctorComponent } from './search-doctor.component';

describe('SearchDoctorComponent', () => {
  let component: SearchDoctorComponent;
  let fixture: ComponentFixture<SearchDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchDoctorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
