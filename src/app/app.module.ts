
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component'; 

import {AngularFirestoreModule} from '@angular/fire/compat/firestore'; 
import { AngularFireModule } from '@angular/fire/compat'; 
import { environment } from '../environments/environment';
import { ListaMascotasComponent } from './views/lista-mascotas/lista-mascotas.component';
import { DetalleMascotaComponent } from './views/detalle-mascota/detalle-mascota.component';
import { FormularioMascotaComponent } from './views/formulario-mascota/formulario-mascota.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearMascotaModule } from './crear-mascota/crear-mascota.module';

@NgModule({
  declarations: [
    AppComponent,
    ListaMascotasComponent,
    DetalleMascotaComponent,
    FormularioMascotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFirestoreModule, 
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    FormsModule,
    CrearMascotaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
