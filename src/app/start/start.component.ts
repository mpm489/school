import { Component } from '@angular/core';
import { CategoriesComponent } from '../categories/categories.component';
import { CoursesComponent } from '../courses/courses.component';
import { FaqComponent } from '../faq/faq.component';
import { StudentsComponent } from '../students/students.component';
import { HaederComponent } from '../haeder/haeder.component';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [CategoriesComponent, 
    CoursesComponent,
    FaqComponent,
    StudentsComponent,
  HaederComponent],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {

}
