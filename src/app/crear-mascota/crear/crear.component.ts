import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MascotasServiceService } from '../../model/mascotas-service.service';
import { Location } from '@angular/common';
import { Mascota } from '../../model/mascota-interfaz';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  //Propiedades
  mascota: any;

  //Formulario reactivo
  dataMascota = this.fb.group({
    idMascota: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    especie: ['', [Validators.required]],
    raza: ['', [Validators.required]],
    edad: ['', [Validators.required]],
    sexo: ['', [Validators.required, Validators.maxLength(1)]],
    nombrePropietario: ['', [Validators.required]]
  });

  constructor(
    private mascotaService: MascotasServiceService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    
  }

  crearMascota(){
    this.mascota = this.dataMascota.value;
    this.mascotaService.newMascota(this.mascota);
  }

  goBack(): void {
    this.location.back();
  }
}
