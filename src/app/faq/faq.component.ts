import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [MatIconModule,
    CommonModule
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

  isExpanded: boolean[] = [];

  openFAQ(index: number) {
    this.isExpanded[index] = !this.isExpanded[index];
  }
}
