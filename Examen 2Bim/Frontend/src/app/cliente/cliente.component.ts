import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Servicio} from "../Servicios/servicio";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {


  formCabecera: FormGroup;
  datosFactura;

  constructor(private _fServicio: Servicio) {
    this.createForm();
  }

  ngOnInit() {
    this._fServicio.mensajeActual4.subscribe(mensaje => this.datosFactura = mensaje);
  }

  private createForm() {
    this.formCabecera = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required)
    });
  }

  agregarDatos(formData) {

    this.datosFactura = {
      'nombre': formData.value.nombre,
      'apellido': formData.value.apellido,
      'direccion': formData.value.direccion,
      'correo': formData.value.correo
    };

    this.resetForm();
    this.mandarDatos();

  }

  mandarDatos() {
    this._fServicio.cambiarMensaje4(this.datosFactura);
  }

  resetForm() {

    const resetForm = <HTMLFormElement>document.getElementById('formCabecera');
    resetForm.reset();
  }

}
