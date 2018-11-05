import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReflowComponent } from './reflow.component';

import { ReflowRoutingModule } from './reflow-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReflowRoutingModule
  ],
  declarations: [
    ReflowComponent
  ]
})
export class ReflowModule { }
