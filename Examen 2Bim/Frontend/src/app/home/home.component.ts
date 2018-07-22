import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
buscar='';
Programas=[];
SistemaOperativo=[];
  constructor(private httpClient:HttpClient, private httpClient2:HttpClient) { }

  ngOnInit() {
  }
busqueda(event:any){
    this.buscar=event.target.value;
}
getProfile(){
    this.httpClient.get(`http://localhost:1337/SistemaOperativo?nombre=${this.buscar}`).subscribe((data:any[])=>{this.SistemaOperativo=data;});
    this.httpClient2.get(`http://localhost:1337/Programa?nombre=${this.buscar}`).subscribe((data:any[])=>{this.Programas=data;});
    console.log(this.buscar)
}
}
