import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-sist-operativo-detalle',
  templateUrl: './sist-operativo-detalle.component.html',
  styleUrls: ['./sist-operativo-detalle.component.css']
})
export class SistOperativoDetalleComponent implements OnInit {
detalle:any;
hijos:any;

  constructor(private _rutaActiva: ActivatedRoute, private httpClient: HttpClient, private httpClient2: HttpClient){
    this._rutaActiva.params.subscribe(params => {
      this.obtenerDatos(params['id']);
    });
  }

  ngOnInit() {
  }
  obtenerDatos(id) {
    this.httpClient2.get(`http://localhost:1337/SistemaOperativo?id=${id}`).subscribe((data: any[]) => {
      this.detalle = data;
        console.log(this.detalle = data);
      this.hijos = data[0].aplicacion;
      console.log(this.hijos = data[0].aplicacion);

    // this.httpClient.get(`http://localhost:1337/Programa?id=${id}`).subscribe((data: any[]) => {
    //     this.detalle = data;
    //     console.log(this.detalle = data);
    //     this.hijos = data[0].Programa;
    //     console.log(this.hijos = data[0].Programa);
    }
    );

  }
}
