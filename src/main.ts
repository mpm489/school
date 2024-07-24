import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import{register as registerSwiperElenets}from'swiper/element/bundle';

registerSwiperElenets();
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
