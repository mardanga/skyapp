import { IVuelo } from './../../interfaces/vuelo';
import { Component, OnInit } from '@angular/core';


import { IRango } from './../../interfaces/IRango';
import { RANGOS, AVIONESRANGOS, VUELOS } from './../../data/data';


@Component({
  selector: 'app-generar-vuelo',
  templateUrl: './generar-vuelo.component.html',
  styleUrls: ['./generar-vuelo.component.css']
})
export class GenerarVueloComponent implements OnInit {

  rangos: IRango[] = RANGOS;
  aviones = [];
  isDataLoaded = false;
  rangoSeleccionado = -1;
  vuelo: IVuelo = null;
  listo = false;

  constructor() { }

  ngOnInit() {
  }

  getAviones(rango) {
     let promesa = new Promise ((resolve, reject) => {
      this.aviones = AVIONESRANGOS.filter(ar => ar.Nivel <= rango);
      this.rangoSeleccionado = rango;
      this.isDataLoaded = true;
      this.listo = false;
      resolve();

    });
    return promesa;
  }

  buscarVuelo() {
    let vuelo = {};
    let minIdVuelo = 0;
    let maxIdVuelo = 0;
    this.listo = false;
    VUELOS.forEach(v => {
      if (parseInt(v.Id, 0) < minIdVuelo) {
        minIdVuelo = parseInt(v.Id, 0);
      } else if (parseInt(v.Id, 0) > maxIdVuelo) {
        minIdVuelo = parseInt(v.Id, 0);
      }

    });
    
    let idVuelo = -1;

    while (this.listo === false) {

      idVuelo = Math.floor(Math.random() * ( maxIdVuelo - minIdVuelo + 1) + minIdVuelo);

      this.vuelo = VUELOS.filter( v => parseInt(v.Id, 0) === idVuelo)[0];
      this.aviones.forEach(a => {
        //console.log(a, vuelo);
        if (a.Seleccionado === true && a.Avion === this.vuelo.Avion ) {
          this.listo = true;
        }
      });
    }

  }
}
