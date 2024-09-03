import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class SearchDoctorComponent implements OnInit {
  searchForm!: FormGroup;
  specialties: string[] = ['Cardiology', 'Dermatology', 'Neurology', 'Pediatrics'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      name: [''],
      gender: [''],
      specialty: ['']
    });
  }

  onSearch(): void {
    const filters = this.searchForm.value;
    // Implement search logic here
    console.log(filters);
  }
}
