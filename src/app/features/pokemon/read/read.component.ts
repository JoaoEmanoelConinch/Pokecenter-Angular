import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonApi } from 'src/app/core/model/pokemonApi';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  pokemon: PokemonApi

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((value)=>{
      this.pokemon = value.entity
    })
  }

  goBack(){
    this.router.navigate(['..'])
  }

}
