import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/core/model/pokemon';
import { PokemonApi } from 'src/app/core/model/pokemonApi';
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

@Injectable()
export class PokemonApiDataResolve implements Resolve<PokemonApi>{
  constructor(private pokemonService: PokemonService){}

  resolve(route: ActivatedRouteSnapshot): Observable<PokemonApi>{
    return this.pokemonService.getData(route.params.name);
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
      entity: PokemonDataResolver
    }
  },
  {
    path: 'name/:name',
    component: ReadComponent,
    resolve:{
      entity: PokemonApiDataResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PokemonsDataResolver, PokemonDataResolver, PokemonApiDataResolve]
})
export class PokemonRoutingModule { }
