// src/app/models/appointment.model.ts
export interface Appointment {
  doctor: any;
  id: number;
  patientId: number;
  doctorId: number;
  date: string;
  time: string;
  type: 'online' | 'physical';
  status: 'booked' | 'completed' | 'cancelled';
}
