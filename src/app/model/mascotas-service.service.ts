import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Mascota } from './mascota-interfaz';



@Injectable({
  providedIn: 'root'
})
export class MascotasServiceService {

  private miColeccion = "mascotas";
  constructor(private firebase: AngularFirestore) { }

  //CRUD

  //Read a single one
  getMascota(id: string){
    return this.firebase.collection(this.miColeccion).doc(id).snapshotChanges();
  }

  //Read all
  getAllMascotas(){
    return this.firebase.collection(this.miColeccion).snapshotChanges();
  }
 
  //Create
  newMascota(mascota: Mascota){
    return this.firebase.collection(this.miColeccion).add(mascota);
  }

  //Update
  updateMascota(documentId: string, mascota: Mascota){
    return this.firebase.collection(this.miColeccion).doc(documentId).update(mascota);
  }

  //Delete
  deleteMascota(documentId: string){
    return this.firebase.collection(this.miColeccion).doc(documentId).delete();
  }

}
