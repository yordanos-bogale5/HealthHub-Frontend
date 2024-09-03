import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchDoctorComponent } from '../search-doctor/search-doctor.component';
import { RouterLink, RouterModule } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchDoctorComponent, RouterModule],

  styleUrls: ['./home.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  specialties: string[] = ['Cardiology', 'Dermatology', 'Neurology', 'Pediatrics', 'Psychiatry'];

  blogTitle: string = 'Sample Blog Title';
  authorName: string = 'Dr. John Doe';
  specialty: string = 'Cardiology';
  dateWritten: Date = new Date();
  blogContent: string = 'This is the content of the blog. It can be as long or as short as needed.';
  comments: { author: string, text: string }[] = [
    { author: 'Patient A', text: 'Great article!' },
    { author: 'Patient B', text: 'Very informative.' }
  ];

  newComment: string = '';
address: any;
phone: any;
bio: any;

  addComment() {
    if (this.newComment.trim()) {
      this.comments.push({ author: 'You', text: this.newComment });
      this.newComment = '';
    }
  }

  ngOnInit(): void {
    const menubar = document.querySelector('#menu-bars');
    const navbar = document.querySelector('.navbar');

    if (menubar && navbar) {
      menubar.addEventListener('click', () => {
        menubar.classList.toggle('fa-times');
        navbar.classList.toggle('active');
      });
    }
  }
}
