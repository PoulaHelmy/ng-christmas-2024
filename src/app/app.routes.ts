import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/media-card/media-card.component').then((c) => c.MediaCardComponent),
    pathMatch: 'full',
  },
];
