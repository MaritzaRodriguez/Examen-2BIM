import {Component, Input, OnInit} from '@angular/core';
import {Servicio} from "../Servicios/servicio";


@Component({
  selector: 'app-sistema-operativo',
  templateUrl: './sistema-operativo.component.html',
  styleUrls: ['./sistema-operativo.component.css']
})
export class SistemaOperativoComponent implements OnInit {
@Input () SistemaOperativo : any;

  constructor(private _detalle: Servicio) {}


  ngOnInit() {
    this._detalle.mensajeActual.subscribe(mensaje=>this.SistemaOperativo= mensaje);
  }
  datos() {
    this._detalle.cambiarMensaje2(this.SistemaOperativo[0].juegos);
  }
}
