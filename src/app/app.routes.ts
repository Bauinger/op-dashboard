import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
      title: 'Dashboard'
  },
  {
    path: 'operations',
    loadComponent: () =>
      import('./operations/operations.component').then(
        (c) => c.OperationsComponent
      ),
      title: 'Einsätze'
  },
  {
    path: 'incident-log',
    loadComponent: () =>
      import('./table/table.component').then(
        (c) => c.TableComponent
      ),
      title: 'Einsatztagebuch'
  },
  {
    path: 'tree',
    loadComponent: () =>
      import('./tree/tree.component').then(
        (c) => c.TreeComponent
      ),
      title: 'Tree'
  },
  {
    path: 'drag-drop',
    loadComponent: () =>
      import('./drag-drop/drag-drop.component').then(
        (c) => c.DragDropComponent
      ),
      title: 'Drag-Drop'
  },
];
