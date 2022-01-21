import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ObjMove } from 'src/app/core/model/objMove';
import { ObjStat } from 'src/app/core/model/objStat';
import { ObjType } from 'src/app/core/model/objType';
import { PokemonApi } from 'src/app/core/model/pokemonApi';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  pokemon: PokemonApi

  types: ObjType[];
  stats: ObjStat[];
  moves: ObjMove[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((value)=>{
      this.pokemon = value.entity
    })

    this.types = this.pokemon.types
    this.stats = this.pokemon.stats
    this.moves = this.pokemon.moves

  }

  goBack(){
    this.router.navigate(['..'])
  }

}
