import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearMascotaRoutingModule } from './crear-mascota-routing.module';
import { CrearComponent } from './crear/crear.component';




@NgModule({
  declarations: [
    CrearComponent
  ],
  imports: [
    CommonModule,
    CrearMascotaRoutingModule
  ]
})
export class CrearMascotaModule { }
