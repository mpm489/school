import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-achievement',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './achievement.component.html',
  styleUrl: './achievement.component.scss'
})
export class AchievementComponent {
  name: string[] = [
    'Mario', 'Albert', 'Aidar',
    'Angela', 'Olaf', 'Alice', 'Thomas', 'Pedro',]

  profession: string[] = [
    'Softwareentwickler', 'Systemadministrator', 'Datenbankadministrator',
    'Netzwerkingenieur', 'IT-Sicherheitsanalyst', 'Webentwickler',
    'Data Scientist', 'IT-Projektmanager']

  icons: string[] = ['videocam', 'group', 'emoji_events'];
  number: (number | string)[] = ['430+', '7000+', '40+'];
  text: string[] = ['Courses', 'Students', 'Awards'];
  imges: string[] = ['1character.png', '2character.png', '3character.png',
    '4character.png', '5character.png', '6character.png', '2character.png', '1character.png',

  ]
}