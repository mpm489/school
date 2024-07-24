import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule,RouterModule ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


  constructor() {   

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        document.querySelector('nav')?.classList.toggle('window-scroll', window.scrollY > 0);
      });
    }
  }

  isExpanded = false;

  openMenu() {
    this.isExpanded = !this.isExpanded;
  }
}
