import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoveApi } from '../../model/moveApi';

@Injectable({
  providedIn: 'root'
})
export class MoveService {

  private pokeApiUrl = `${environment.pokeApiUrl}move`

  constructor(
    private http: HttpClient
  ) { }

  getData(name: string): Observable<MoveApi> {
    const move: Observable<any> = this.http.get(`${this.pokeApiUrl}/${name}`);
    if (move){
      return move
    }
  }

}
