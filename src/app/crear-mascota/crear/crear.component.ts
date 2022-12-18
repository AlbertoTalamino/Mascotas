import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MascotasServiceService } from '../../model/mascotas-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  constructor(
    private mascotaService: MascotasServiceService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

  crearMascota(){
    
  }

  goBack(): void {
    this.location.back();
  }
}
