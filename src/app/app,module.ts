import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { SearchDoctorComponent } from './components/search-doctor/search-doctor.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { NotificationComponent } from './components/notification/notification.component';
import { PatientSearchComponent } from './components/patient-search/patient-search.component';
import { BrowserModule } from '@angular/platform-browser';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', title: 'Medical Hospital', component: HomeComponent },
  { path: 'search-doctor', title: 'Medical Hospital', component: SearchDoctorComponent },
  { path: 'appointment', title: 'Medical Hospital-appointment', component: AppointmentComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NotificationComponent,
    HomeComponent,
    AppointmentComponent,
    ChatComponent,
    SearchDoctorComponent,
    PatientSearchComponent,
    AppComponent // Importing the standalone component
  ],
})
export class AppModule { }
