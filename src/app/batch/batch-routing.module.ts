import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';

import { BatchComponent } from './batch.component';

const batchRoutes: Routes = [
  {
    path: '',
    component: BatchComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(batchRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BatchRoutingModule { }
