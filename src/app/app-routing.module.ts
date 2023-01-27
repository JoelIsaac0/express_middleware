import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ReporteComponent } from './reporte/reporte.component';

const routes: Routes = [
  {path:'informacion', component:GaleriaComponent},
  {path:'registro', component:FormularioComponent},
  {path:'reporte', component:ReporteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
