import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  deducibles = [
    {
      nombre: 'Vivienda',
      imagen: './assets/Vivienda.jpg',
    },
    {
      nombre: 'Salud',
      imagen: './assets/Salud.jpg',
    },
    {
      nombre: 'Educacion',
      imagen: './assets/Educacion.jpeg',
    },
  ];
  informacion() {
    alert('Esta es información adicional');
  }
  borrarDeducible(deducible: string) {
    for (let i = 0; i < this.deducibles.length; i++) {
      if (deducible == this.deducibles[i].nombre) {
        this.deducibles.splice(i, 1);
      }
    }
  }
}
