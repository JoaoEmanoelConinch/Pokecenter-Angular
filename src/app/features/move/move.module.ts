import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoveRoutingModule } from './move-routing.module';
import { ReadComponent } from './read/read.component';


@NgModule({
  declarations: [ReadComponent],
  imports: [
    CommonModule,
    MoveRoutingModule
  ]
})
export class MoveModule { }
