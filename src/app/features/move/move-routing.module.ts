import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ReadComponent } from './read/read.component';
import { MoveApi } from 'src/app/core/model/moveApi';
import { MoveService } from 'src/app/core/services/move/move.service';
import { Observable } from 'rxjs';

@Injectable()
export class MoveDataResolver implements Resolve<MoveApi>{
  constructor(
    private moveService: MoveService
  ){}

  resolve(route: ActivatedRouteSnapshot): Observable<MoveApi>{
    return this.moveService.getData(route.params.name);
  }
}

const routes: Routes = [
  {
    path:'',
    redirectTo:'../pokemon',
    pathMatch: 'full',
  },
  {
    path: ':name',
    component: ReadComponent,
    resolve: {
      entity: MoveDataResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [MoveDataResolver]
})
export class MoveRoutingModule { }
