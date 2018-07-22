import {HomeComponent} from "./home/home.component";
import {Routes} from "@angular/router";
import {CarritoComponent} from "./carrito/carrito.component";
import {SistemaOperativoComponent} from "./sistema-operativo/sistema-operativo.component";
import {ProgramasComponent} from "./programas/programas.component";
import {ProgramaDetalleComponent} from "./programa-detalle/programa-detalle.component";
import {SistOperativoDetalleComponent} from "./sist-operativo-detalle/sist-operativo-detalle.component";

export const RUTAS: Routes=[
  {
  path: 'home',
  component: HomeComponent,
  },
  {
    path: 'carrito',
    component: CarritoComponent,
  },
  {
    path: 'sistemaOperativo/:id/programa/:idPrograma',
    component: ProgramaDetalleComponent,
  },
  {
    path:'sistemaOperativo/:id',
    component: SistOperativoDetalleComponent,
    children:
    [{
      path:'programas/:idPrograma',
      component: ProgramasComponent,
    }]
  },
  {
    path: '**',
    pathMatch:'full',
    redirectTo:'home'
  }
];
