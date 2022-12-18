import { Component, OnInit, ViewChild } from '@angular/core';
import { MascotasServiceService } from '../../model/mascotas-service.service';
import { ActivatedRoute } from '@angular/router';
import { Mascota } from '../../model/mascota-interfaz';
import { Location } from '@angular/common';

@Component({
  selector: 'app-formulario-mascota',
  templateUrl: './formulario-mascota.component.html',
  styleUrls: ['./formulario-mascota.component.css']
})
export class FormularioMascotaComponent implements OnInit {

  mascotaObject: any[] = [];
  mascota?: Mascota | any;
  //Id de Firebase
  id?: string | any;

  constructor(
    private mascotaService: MascotasServiceService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.getMascota();
  }

  getMascota(){

    this.route.paramMap.subscribe((params) => {
      let id = String(params.get('documentId'));

      this.mascotaService.getMascota(id).subscribe((resp: any) => {

        this.mascotaObject = [{
          id: resp.payload.id, 
          data: resp.payload.data()
        }]

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

  eliminaMascota(){
    this.mascotaService.deleteMascota(this.id).then( () => {
      alert("¡MASCOTA ELIMINADA!");
    }, (error) => {
      alert("A ocurrido un error");
    }
    );
  }

  onSubmit() {

    // let name = document.getElementById("nombre");
    // console.log(name);
    
    
    this.mascotaObject[0].data.nombre = " ";
    
    this.mascotaService.updateMascota(this.id, this.mascotaObject[0].data);
  }     
  
  goBack(): void {
    this.location.back();
  }

  

}
