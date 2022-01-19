import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/core/model/pokemon';
import { PokemonService } from 'src/app/core/services/pokemon/pokemon.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  pokemonFormGrou: FormGroup
  formTypeLabel: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemonFormGrou = this.formBuilder.group({
      id: [''],
      likname: [''],
      name: ['',[Validators.required]],
      badStatus: ['',[Validators.required]]
    })

    const hasId = Boolean(this.activatedRoute.snapshot.params.id)

    this.formTypeLabel = hasId ? 'Atualizar' : 'Cadastrar';
  }

  submit(event: Pokemon): void{
    this.pokemonService.upsert(event).subscribe(() => {
      this.router.navigate(['..'],{relativeTo: this.activatedRoute})
    })
  }

}
