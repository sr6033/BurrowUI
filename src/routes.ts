import { Routes } from '@angular/router';
import { ErrorComponent } from './app/error/error.component';
import { HomeComponent } from './app/home/home.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent},
  { path: '**', component: ErrorComponent},
];
