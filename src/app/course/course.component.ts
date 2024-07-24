import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent {

  text: string[] = [
    "Responsive Social Media Website UI Design", 
    "Responsive SmartHome Website Design", 
    "Responsive Admin Dashboard UI Design",
    "Best JavaScript online Course",
    "Angular crash Course",
    "WordPress Full Course 10 + Hours",
    "ChatGPT online Course",
    "Website Design online Course",
    "Web Developement HTML5 CSS3"

  ];
  
  images: string[] = [
    "1.jpg", 
    "2.jpg",
    "3.png",
    "4.jpg", 
    "5.jpg",
    "6.jpg",
    "7.jpg", 
    "8.jpg",
    "9.jpg",
   
  ];

}
