import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Sellers } from './features/sellers/sellers';

export const routes: Routes = [
  {
    path: '',
    component: Dashboard,
  },
  {
    path: 'sellers',
    component: Sellers,
  },
];