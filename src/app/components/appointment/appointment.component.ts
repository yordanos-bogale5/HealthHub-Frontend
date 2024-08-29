import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  standalone:true,
  imports:[ReactiveFormsModule],
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointmentForm: FormGroup;
  availableDoctors: string[] = [];

  // Example data for doctors' availability
  doctorsAvailability: { [key: string]: string[] } = {
    '2024-08-21': ['Dr. Smith', 'Dr. Johnson'],
    '2024-08-22': ['Dr. Lee', 'Dr. Brown'],
    '2024-08-23': ['Dr. Smith', 'Dr. Brown'],
    '2024-08-24': ['Dr. Johnson', 'Dr. Lee']
  };

  constructor(private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      activity: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      doctor: ['', Validators.required],
      nationality: ['', Validators.required],
      patientName: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      terms: [false, Validators.requiredTrue],
      updates: [false]
    });
  }

  ngOnInit(): void {
    this.onDateChange();
  }

  onDateChange(): void {
    this.appointmentForm.get('appointmentDate')?.valueChanges.subscribe(date => {
      this.availableDoctors = this.getAvailableDoctors(date);
      this.appointmentForm.get('doctor')?.setValue('');
    });
  }

  getAvailableDoctors(date: string): string[] {
    return this.doctorsAvailability[date] || [];
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      console.log('Form Data:', this.appointmentForm.value);
      alert('Form submitted successfully!');
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
