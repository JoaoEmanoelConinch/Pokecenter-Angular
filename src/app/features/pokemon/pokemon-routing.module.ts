import { Component, Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/core/model/pokemon';
import { PokemonData } from 'src/app/core/model/pokemonData';
import { Status } from 'src/app/core/model/stutus';
import { PokemonService } from 'src/app/core/services/pokemon/pokemon.service';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ReadComponent } from './read/read.component';

@Injectable()
export class PokemonsDataResolver implements Resolve<Pokemon[]>{
  constructor(private pokemonService: PokemonService){}

  resolve(): Observable<Pokemon[]>{
    return this.pokemonService.all();
  }
}

@Injectable()
export class PokemonDataResolver implements Resolve<Pokemon>{
  constructor(private pokemonService: PokemonService){}

  resolve(route: ActivatedRouteSnapshot): Observable<Pokemon>{
    return this.pokemonService.getOne(route.params.id);
  }
}

//verificar
@Injectable()
export class PokemonDataDataResolver implements Resolve<Pokemon>{
  constructor(private pokemonService: PokemonService){}

  resolve(route: ActivatedRouteSnapshot): Observable<PokemonData>{
    let pokemon = this.pokemonService.getData(route.params.name)

    let pokemonData = new PokemonData()

    pokemonData.sprites = pokemon.subscribe((data) => {
      data.sprites.front_default
    })

    pokemon.subscribe((data) => {
      for (let i = 0; i < data.types.launch; i++){
        pokemonData.types.push(data.types[i].type.name)
      }
    })

    pokemon.subscribe((data) => {
      for (let i = 0; i < data.moves.launch; i++){
        pokemonData.moves.push(data.moves[i].move.name)
      }
    })

    pokemon.subscribe((data) => {
      for (let i = 0; i < data.stats.launch; i++){
        let status = new Status()

        status.base_stat = data.stats[i].base_stat
        status.name = data.stats[i].stat.name

        pokemonData.status.push(status)
      }
    })

    return pokemonData;

  }
}

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    resolve: {
      entities: PokemonsDataResolver
    }
  },
  {
    path: 'add',
    component: FormComponent
  },
  {
    path: ':id',
    component: FormComponent,
    resolve: {
      entities: PokemonsDataResolver
    }
  },
  {
    path: 'name/:name',
    component: ReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PokemonsDataResolver, PokemonDataResolver]
})
export class PokemonRoutingModule { }
