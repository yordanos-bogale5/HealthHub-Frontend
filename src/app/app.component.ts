import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ToastNotificationComponent } from './components/toast-notification/toast-notification.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from "./components/chat/chat.component";
import { DoctorloginComponent } from "./components/doctorlogin/doctorlogin.component";
import { DoctorsignupComponent } from "./components/doctorsignup/doctorsignup.component";
import { AdminLoginComponent } from './components/adminlogin/adminlogin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FontAwesomeModule,
             RouterOutlet,
             HomeComponent,
             AppointmentComponent,
              NotificationComponent,
              ToastNotificationComponent,
               ReactiveFormsModule,
               DoctorloginComponent,
               DoctorsignupComponent,
               ChatComponent,
               AdminLoginComponent,
               DashboardComponent

              ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  faCoffee = faCoffee;
  title: any;
}
