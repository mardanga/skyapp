import { VUELOS } from './../../data/data';
import { IVuelo } from './../../interfaces/vuelo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-vuelos',
  templateUrl: './listado-vuelos.component.html',
  styleUrls: ['./listado-vuelos.component.css']
})
export class ListadoVuelosComponent implements OnInit {

  vuelos: IVuelo[] = VUELOS;

  constructor() { }
  

  ngOnInit() {
  }

}
