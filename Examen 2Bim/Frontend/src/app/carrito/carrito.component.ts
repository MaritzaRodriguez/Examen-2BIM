import { Component, OnInit } from '@angular/core';
import {Servicio} from "../Servicios/servicio";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  datosFactura: { nombre: string, apellido: string, direccion: string, correo: string };
  listaItems = [];
  items: number;
  total: number;

  constructor(private _programaServicio: Servicio, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this._programaServicio.mensajeActual3.subscribe(mensaje => this.listaItems = mensaje);
    this._programaServicio.mensajeActual4.subscribe(mensaje => this.datosFactura = mensaje);
    this.items = this.listaItems.length;
    this.calcularTotal();
  }

  eliminarItem(arregloIds, idpelicula) {

    this.total -= parseFloat(this.listaItems[arregloIds].precio);
    this.listaItems.splice(arregloIds, 1);
    this.cambiarEstado(idpelicula);
    this.mandarDatos();
  }

  mandarDatos() {
    this._programaServicio.cambiarMensaje3(this.listaItems);
  }

  private calcularTotal() {
    this.total = this.listaItems.reduce((acumulador, actual) => {
      acumulador += parseFloat(actual.costo);
      return acumulador;
    }, 0);
  }

  cambiarEstado(id) {
    this.httpClient.put(`http://localhost:1337/Programa/${id}`, {

      estado: true

    }).subscribe(
      res => {
      }
    );

  }
  completarOrden() {

    for (let i = 0; i < this.listaItems.length; i++) {
      this.cambiarEstado(this.listaItems[i].id);
    }

    this.total = 0;
    this.listaItems = [];
    this.mandarDatos();
  }

}
