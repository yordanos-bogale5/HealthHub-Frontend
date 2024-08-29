import { Routes } from '@angular/router';
import {DoctorComponent} from './components/doctor/doctor.component';
import {SignupComponent} from './components/signup/signup.component';
import {LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { PatientprofileComponent } from './components/patientprofile/patientprofile.component';


export const routes: Routes = [
    {path:'',title:"LifeCare",component: DoctorComponent},
    {path:'signup',title:"LifeCare-signup",component: SignupComponent},
    {path:'login',title:"LifeCare-login",component: LoginComponent},
    {path:'profile',title:"LifeCare-profile",component: ProfileComponent},
    {path:'appointment',title:"LifeCare-appointment",component:AppointmentComponent},
    {path:'patientprofile',title:"LifeCare-patientprofile",component:PatientprofileComponent}
];
