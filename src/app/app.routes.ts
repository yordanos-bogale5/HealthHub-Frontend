import { Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { SearchDoctorComponent } from './components/search-doctor/search-doctor.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PatientsignupComponent } from './components/patientsignup/patientsignup.component';
import { DoctorsignupComponent } from './components/doctorsignup/doctorsignup.component';
import { AdminLoginComponent } from './components/adminlogin/adminlogin.component';
import { PatientloginComponent } from './components/patientlogin/patientlogin.component';
import { DoctorloginComponent } from './components/doctorlogin/doctorlogin.component';

export const routes: Routes = [
  { path: 'home', title: 'Medical Hospital', component: HomeComponent },
  { path: 'search-doctor', title: 'Medical Hospital', component: SearchDoctorComponent },
  { path: 'appointment', title: 'Medical Hospital-appointment', component: AppointmentComponent },
  { path: 'doctorlogin', title: 'Doctorpage', component: DoctorloginComponent },
  { path: 'patientlogin', title: 'patient page', component: PatientloginComponent },
  { path: 'adminlogin', title: 'Admin page', component: AdminLoginComponent },
  { path: 'patientsignup', title: 'patient page', component: PatientsignupComponent },
  { path: 'dashboard', title: 'Admin Dashboard', component: DashboardComponent},
  { path: 'doctorsignup',title:'Signup',component:DoctorsignupComponent}
];
export class AppModule { }
