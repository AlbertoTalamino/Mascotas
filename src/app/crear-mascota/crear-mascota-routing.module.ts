import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './crear/crear.component';


const routes: Routes = [
  {path:'crear', component: CrearComponent},
  {path: '**' , redirectTo: '/crear', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearMascotaRoutingModule { }
