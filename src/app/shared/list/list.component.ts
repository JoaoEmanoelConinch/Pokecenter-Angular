import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'shared-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  @Input()
  headers: string[];

  @Input()
  keys: string[];

  @Output()
  deleteEntity = new EventEmitter();

  @Output()
  searchEntity = new EventEmitter();

  entities: any[];
  inputValue: string

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((value) =>{
      this.entities = value.entities;
    })

    this.keys= Object.keys(this.entities[0]).filter(
      (key) => key !== 'id'
    )
  }

  goToAdd():void {
    this.router.navigate(['add'], {relativeTo: this.activatedRoute})
  }

  editEntity(id: number): void{
    this.router.navigate([id], {relativeTo: this.activatedRoute})
  }

  seePokemonData(name: string): void{
    this.router.navigate(['name',name], {relativeTo: this.activatedRoute})
  }

  search(){
    const obj = {
      query: this.inputValue,
      callback: (entities) => { this.setEntities(entities) }
    }
    console.log(this.inputValue)
    this.searchEntity.emit(obj);
  }

  onDeleteEntity(id: number):void{
    const obj = {
      id,
      callback:  (entities) => { this.setEntities(entities) }
    };
    this.deleteEntity.emit(obj)
  }

  private setEntities(entities){
    this.entities = entities
  }

}
