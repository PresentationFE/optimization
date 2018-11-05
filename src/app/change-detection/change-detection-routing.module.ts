import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';

import { ChangeDetectionComponent } from './change-detection.component';

const changesRoutes: Routes = [{
  path: '',
  component: ChangeDetectionComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(changesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ChangeDetectionRoutingModule { }
