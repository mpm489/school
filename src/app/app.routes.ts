import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { AchievementComponent } from './achievement/achievement.component';
import { CourseComponent } from './course/course.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component: StartComponent },
    { path: 'achievement', component: AchievementComponent },
    { path: 'course', component: CourseComponent },
    { path: 'contact', component: ContactComponent }






];
