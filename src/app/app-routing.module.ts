import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ConocimientoComponent } from './components/conocimiento/conocimiento.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { IniciarComponent }   from './components/iniciar/iniciar.component';
import { EditarComponent } from './components/editar/editar.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'conocimiento', component: ConocimientoComponent},
  { path: 'experiencia', component: ExperienciaComponent},
  { path: 'educacion', component: EducacionComponent},
  { path: 'iniciar', component:IniciarComponent},
  { path: 'proyecto', component: ProyectoComponent},
  { path: 'editar', component: EditarComponent},
  { path: '**',pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
