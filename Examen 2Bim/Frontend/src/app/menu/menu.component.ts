import { Component, OnInit } from '@angular/core';
import {Servicio} from "../Servicios/servicio";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  items: any;

  constructor(private _programaServicio: Servicio) {
    this._programaServicio.mensajeActual3.subscribe(mensaje => this.items = mensaje);
  }
  ngOnInit() {
  }

}
