// src/app/services/appointment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'https://your-api-url.com/appointments'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.apiUrl);
  }

  bookAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(this.apiUrl, appointment);
  }

  getAppointmentQueue(doctorId: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiUrl}/queue/${doctorId}`);
  }
}
