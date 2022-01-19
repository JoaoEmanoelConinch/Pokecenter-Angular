import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/core/model/pokemon';
import { PokemonService } from 'src/app/core/services/pokemon/pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  pokemons: Pokemon[] = [];
  headers: string[] = ['Likname','Name','BadStatus','Actions']

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  deletePokemon(event): void{
    this.pokemonService.delete(event.id).subscribe(()=>{
      this.pokemonService.all().subscribe(event.callback)
    })
  }

}
