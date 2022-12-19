import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearMascotaRoutingModule } from './crear-mascota-routing.module';
import { CrearComponent } from './crear/crear.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CrearComponent,
  ],
  imports: [
    CommonModule,
    CrearMascotaRoutingModule,
    ReactiveFormsModule
  ]
})
export class CrearMascotaModule { }
