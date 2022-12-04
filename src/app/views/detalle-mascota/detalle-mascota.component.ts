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

  constructor(
    private mascotasService: MascotasServiceService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getMascota();
  }

  getMascota(){

    this.route.paramMap.subscribe((params) => {
      let id = String(params.get('id'));

      this.mascotasService.getMascota(id).subscribe((resp) => {
        console.log(resp);
        //this.mascota = resp.data;
      });
    });

  }

  // getAll(){
  //   this.mascotaService.getAllMascotas().subscribe((mascotasSnapshot: any) => {
  //     mascotasSnapshot.forEach((mascotaData:any) => {
  //       console.log(mascotaData);
  //       this.listaMascotas.push({
  //         id: mascotaData.payload.doc.id,
  //         data: mascotaData.payload.doc.data()
  //       });
  //     });
  //   })
  // }

  goBack(): void {
    this.location.back();
  }
}
