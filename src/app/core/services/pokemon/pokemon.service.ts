import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../../model/pokemon';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private dummyBackendUrl = `${environment.dummyBackendUrl}`
  private pokeApiUrl = `${environment.pokeApiUrl}`

  constructor(private http: HttpClient) { }

  all(): Observable<Pokemon[]> {
    //param
    return this.http.get<Pokemon[]>(this.dummyBackendUrl).pipe(map(values => values.filter(value => value.likname)))
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

  getData(name: string) {
    return this.http.get(`${this.pokeApiUrl}/${name}`)
  }
}
