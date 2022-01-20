import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ReadComponent } from './read/read.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';
import {ListboxModule} from 'primeng/listbox';


@NgModule({
  declarations: [FormComponent, ListComponent, ReadComponent],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    SharedModule,
    ButtonModule,
    TableModule,
    ListboxModule
  ]
})
export class PokemonModule { }
