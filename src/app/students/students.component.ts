import { Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [
    CommonModule,   
  ],  
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class StudentsComponent {
  slidesPerView: number = 3;

  breakpoints = {
    500: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 2,
    },
    1026: {
      slidesPerView: 3,
    },
  };  
 
}
