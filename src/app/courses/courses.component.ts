import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
text: string[] = [
  "Responsive Social Media Website UI Design", 
  "Responsive SmartHome Website Design", 
  "Responsive Admin Dashboard UI Design"
];

images: string[] = [
  "1.jpg", 
  "2.jpg",
  "3.png",
 
];

}
