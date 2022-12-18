import { Component, OnInit } from '@angular/core';
import { MascotasServiceService } from '../../model/mascotas-service.service';


@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.css']
})
export class ListaMascotasComponent implements OnInit {

  listaMascotas: any[] = [];

  constructor(private mascotaService: MascotasServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){ 
    this.mascotaService.getAllMascotas().subscribe((mascotasSnapshot: any) => {
      mascotasSnapshot.forEach((mascotaData:any) => {

        this.listaMascotas.push({
          id: mascotaData.payload.doc.id, 
          data: mascotaData.payload.doc.data()
        });
        
      });
    })
  }

 
}
