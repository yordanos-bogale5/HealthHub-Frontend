import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css'
})
export class DoctorComponent {
  authorName='Dr.hermela';
  specialty='Dermatology';
  address='currently working in medicare hospital';
  phone='+251923456789';
  bio='most intelegent and hard working doctor ';
}
