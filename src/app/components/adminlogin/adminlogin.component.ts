import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-admin-login',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    if (this.username === 'admin' && this.password === 'admin') {
      alert('Login successful!');
    } else {
      alert('Invalid username or password');
    }
  }
}
