// notification.model.ts
export interface Notification {
  type: string;
  message: string;
  timestamp: Date;
  recipient:'doctor' | 'patient';
}
