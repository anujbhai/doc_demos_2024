import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HeroComponent } from './hero/hero.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'hero/:id', component: HeroComponent },
  { path: '**', component: NotFoundComponent },
];
