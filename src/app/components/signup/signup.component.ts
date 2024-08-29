import { Component } from '@angular/core';
import { DoctorComponent } from "../doctor/doctor.component";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [DoctorComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
}
