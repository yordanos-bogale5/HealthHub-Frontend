import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { DoctorComponent } from "./components/doctor/doctor.component";
import { SignupComponent } from "./components/signup/signup.component";
import { ProfileComponent } from './components/profile/profile.component';
import { NotificationComponent } from "./components/notification/notification.component";
import { PatientComponent } from "./components/patient/patient.component";
import { AppointmentComponent } from "./components/appointment/appointment.component";
import { PatientprofileComponent } from "./components/patientprofile/patientprofile.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, DoctorComponent, SignupComponent, NotificationComponent, ProfileComponent, PatientComponent, AppointmentComponent, PatientprofileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'creavers';
}
