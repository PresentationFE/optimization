import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule
} from '@angular/forms';

import { ChangeDetectionComponent } from './change-detection.component';
import { ChangeDetectionRoutingModule } from './change-detection-routing.module';
import { DefaultComponent } from './default/default.component';
import { OnPushComponent } from './on-push/on-push.component';
import { ZoneComponent } from './zone/zone.component';
import { ObservablesComponent } from './observables/observables.component';

@NgModule({
  imports: [
    CommonModule,
    ChangeDetectionRoutingModule,
    FormsModule
  ],
  declarations: [
    ChangeDetectionComponent,
    DefaultComponent,
    OnPushComponent,
    ZoneComponent,
    ObservablesComponent
  ]
})
export class ChangeDetectionModule { }
