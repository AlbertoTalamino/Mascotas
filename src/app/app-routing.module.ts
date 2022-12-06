import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMascotasComponent } from './views/lista-mascotas/lista-mascotas.component';
import { DetalleMascotaComponent } from './views/detalle-mascota/detalle-mascota.component';
import { FormularioMascotaComponent } from './views/formulario-mascota/formulario-mascota.component';

const routes: Routes = [
  {path: '', component: ListaMascotasComponent},
  {path: 'listaMascotas', component: ListaMascotasComponent},
  {path: "detalleMascota/:documentId", component: DetalleMascotaComponent},
  {path: "formularioMascota/:documentId", component: FormularioMascotaComponent},
  {path: '**' , redirectTo: '/listaMascotas', pathMatch: 'full'},
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
