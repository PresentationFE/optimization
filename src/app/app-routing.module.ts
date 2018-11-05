import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'reflow',
    loadChildren: './reflow/reflow.module#ReflowModule',
  },
  {
    path: 'batch',
    loadChildren: './batch/batch.module#BatchModule',
  },
  {
    path: 'change-detection',
    loadChildren: './change-detection/change-detection.module#ChangeDetectionModule',
  },
  { path: '', redirectTo: '/reflow', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
