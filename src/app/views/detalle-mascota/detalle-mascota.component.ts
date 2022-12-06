import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mascota } from '../../model/mascota-interfaz';
import { MascotasServiceService } from '../../model/mascotas-service.service';


@Component({
  selector: 'app-detalle-mascota',
  templateUrl: './detalle-mascota.component.html',
  styleUrls: ['./detalle-mascota.component.css']
})
export class DetalleMascotaComponent implements OnInit {

  mascota?: Mascota;
  //Id de Firebase
  id?: string;

  constructor(
    private mascotaService: MascotasServiceService,
    private route: ActivatedRoute,
    private location: Location 
  ) { }

  ngOnInit(): void {
    this.getMascota();
  }

  getMascota(){

    this.route.paramMap.subscribe((params) => {
      let id = String(params.get('documentId'));

      this.mascotaService.getMascota(id).subscribe((resp: any) => {

        this.id = resp.payload.id;
 
        this.mascota = {
          idMascota: resp.payload.data()['idMascota'],
          nombre: resp.payload.data()['nombre'],
          especie: resp.payload.data()['especie'],
          raza: resp.payload.data()['raza'],
          edad: resp.payload.data()['edad'],
          sexo: resp.payload.data()['sexo'],
          nombrePropietario: resp.payload.data()['nombrePropietario']
        };
      });
     });

  }

  goBack(): void {
    this.location.back();
  }

  
}
