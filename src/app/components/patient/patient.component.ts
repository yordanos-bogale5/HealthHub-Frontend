import { Component } from '@angular/core';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {
  authorName='Mr.Natnael Desalegn';
  address='Addis Ababa';

}
