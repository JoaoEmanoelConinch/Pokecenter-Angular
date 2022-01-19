import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'shared-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input()
  formEntity: FormGroup

  @Output()
  submit = new EventEmitter

  keys: string[]

  constructor(
    private activedRoutes: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.keys = Object.keys(this.formEntity.value).filter(
      (key) => key !== 'id'
    )

    this.activedRoutes.data.subscribe((value)=>{
      if(value.entity){
        this.formEntity.patchValue(value.entity)
      }
    })

  }

  goBack(){
    this.router.navigate(['..'], {relativeTo:this.activedRoutes})
  }

  clickSubmit(){
    if(this.formEntity.valid){
      this.submit.emit(this.formEntity.value)
    }
  }

}
