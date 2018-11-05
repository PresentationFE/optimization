import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';

import { ReflowComponent } from './reflow.component';

const reflowRoutes: Routes = [{
  path: '',
  component: ReflowComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(reflowRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ReflowRoutingModule { }
