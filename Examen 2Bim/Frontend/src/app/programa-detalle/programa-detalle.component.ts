import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {Servicio} from "../Servicios/servicio";

@Component({
  selector: 'app-programa-detalle',
  templateUrl: './programa-detalle.component.html',
  styleUrls: ['./programa-detalle.component.css']
})
export class ProgramaDetalleComponent implements OnInit {

  programa={
    pesoGB: '',
    version: '',
    nombre: '',
    imagen: '',
    url: '',
    fechaLanzamiento: '',
    costo: '',
    estado: '',
    id:'',
  };
  estado : any ;
  arregloCarrito=[];
  constructor(private httpCliente: HttpClient, private _rutaActiva:ActivatedRoute, private _itemServicio: Servicio) {
    this._rutaActiva.params.subscribe(params =>{this.obtenerPrograma(params['idPrograma'])});
  }

  ngOnInit() {
    this._itemServicio.mensajeActual3.subscribe(mensaje => this.arregloCarrito = mensaje);
  }
obtenerPrograma (id){
    this.httpCliente.get(`http://localhost:1337/Programa?id=${id}`).subscribe((data:any[])=>{
      this.programa=data[0];
      this.estado = this.programa.estado;
    })
}
  cambiarEstado(id) {
    this.httpCliente.put(`http://localhost:1337/Programa/${id}`, {
      estado: false
    }).subscribe(
      res => {
      }
    );
  }
  mandarDatos() {
    this._itemServicio.cambiarMensaje3(this.arregloCarrito);
  }
  agregarDatos(id) {

    this.cambiarEstado(id);
    this.arregloCarrito.push(this.programa);
    this.mandarDatos();
  }
}
