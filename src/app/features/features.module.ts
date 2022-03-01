import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { MoveModule } from './move/move.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    PokemonModule,
    MoveModule
  ]
})
export class FeaturesModule { }
