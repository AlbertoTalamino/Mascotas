import { Component, OnInit, ViewChild } from "@angular/core";
import { MascotasServiceService } from "../../model/mascotas-service.service";
import { ActivatedRoute } from "@angular/router";
import { Mascota } from "../../model/mascota-interfaz";
import { Location } from "@angular/common";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-formulario-mascota",
  templateUrl: "./formulario-mascota.component.html",
  styleUrls: ["./formulario-mascota.component.css"],
})
export class FormularioMascotaComponent implements OnInit {
  
  //Propiedades
  documentId?: any;
  datosMascota: any;

  //Formulario reactivo
  dataMascota = this.fb.group({
    id: [""],
    idMascota: [""],
    nombre: [""],
    especie: [""],
    raza: [""],
    edad: [""],
    sexo: [""],
    nombrePropietario: [""],
  });

  constructor(
    private mascotaService: MascotasServiceService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.documentId = this.route.snapshot.paramMap.get("documentId");
    this.mascotaService.getMascota(this.documentId).subscribe((resp) => {
      this.datosMascota = resp.payload.data();
      this.dataMascota.setValue(this.datosMascota);
    });
  }

  onSubmit() {
    this.datosMascota = this.dataMascota.value;
    this.mascotaService.updateMascota(this.documentId, this.datosMascota);
  }

  eliminaMascota() {
    this.mascotaService.deleteMascota(this.documentId).then(
      () => {
        alert("¡MASCOTA ELIMINADA!");
      },
      (error) => {
        alert("A ocurrido un error");
      }
    );
  }

  goBack(): void {
    this.location.back();
  }
}
