import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../../model/pokemon';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonApi } from '../../model/pokemonApi';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private dummyBackendUrl = `${environment.dummyBackendUrl}`
  private pokeApiUrl = `${environment.pokeApiUrl}pokemon`

  constructor(private http: HttpClient) { }

  all(queryParams?: {query?: string;}): Observable<Pokemon[]> {
    let params = {}

    console.log(queryParams)

    if(queryParams){
      const {query} = queryParams

      params = query ? {q: query}:{};
    }

    return this.http.get<Pokemon[]>(this.dummyBackendUrl, {params}).pipe(map(values => values.filter(value => value.likname)))
  }

  getOne(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.dummyBackendUrl}/${id}`)
  }

  delete(id: number): Observable<unknown> {
    return this.http.delete(`${this.dummyBackendUrl}/${id}`)
  }

  upsert(pokemon: Pokemon) {
    if (pokemon.id) {
      return this.http.patch<Pokemon>(`${this.dummyBackendUrl}/${pokemon.id}`, pokemon)
    } else {
      return this.http.post<Pokemon>(this.dummyBackendUrl, pokemon)
    }
  }

  getData(name: string): Observable<PokemonApi> {
    const pokemon:Observable<any> = this.http.get(`${this.pokeApiUrl}/${name}`)
    if(pokemon){
      return pokemon;
    }
  }

  // parseToData(Pokemon): Observable<Pokemon>
}
