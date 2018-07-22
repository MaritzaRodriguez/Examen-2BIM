import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ProgramasComponent } from './programas/programas.component';
import { SistemaOperativoComponent } from './sistema-operativo/sistema-operativo.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { CarritoComponent } from './carrito/carrito.component';
import {RouterModule} from "@angular/router";
import {RUTAS} from "./app.Rutas";
import { SistOperativoDetalleComponent } from './sist-operativo-detalle/sist-operativo-detalle.component';
import {HttpClientModule} from "@angular/common/http";
import { ProgramaDetalleComponent } from './programa-detalle/programa-detalle.component';
import { ClienteComponent } from './cliente/cliente.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ProgramasComponent,
    SistemaOperativoComponent,
    CarritoComponent,
    SistOperativoDetalleComponent,
    ProgramaDetalleComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RUTAS,{useHash:true}),
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
