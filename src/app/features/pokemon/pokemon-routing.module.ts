import { Component, Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/core/model/pokemon';
import { PokemonService } from 'src/app/core/services/pokemon/pokemon.service';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ReadComponent } from './read/read.component';

@Injectable()
export class PokemonsDataResolver implements Resolve<Pokemon[]>{
  constructor(private pokemonService: PokemonService){}

  resolve(): Observable<Pokemon[]>{
    console.log('all')
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
