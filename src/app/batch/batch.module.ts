import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchComponent } from './batch.component';

import { BatchRoutingModule } from './batch-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BatchRoutingModule
  ],
  declarations: [BatchComponent]
})
export class BatchModule { }
