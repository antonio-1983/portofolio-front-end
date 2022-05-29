import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { app_routing } from "./app.routes";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ConocimientoComponent } from './components/conocimiento/conocimiento.component';
import { EducacionComponent } from './components/educacion/educacion.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IniciarComponent } from './components/iniciar/iniciar.component';
import { EditarComponent } from './components/editar/editar.component';
import { EditarconComponent } from './components/editar/editarcon/editarcon.component';
import { EditareducacionComponent } from './components/editar/editareducacion/editareducacion.component';
import { EditarexperienciaComponent } from './components/editar/editarexperiencia/editarexperiencia.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { EditarproyectoComponent } from './components/editar/editarproyecto/editarproyecto.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienciaComponent,
    ConocimientoComponent,
    EducacionComponent,
    IniciarComponent,
    EditarComponent,
    EditarconComponent,
    EditareducacionComponent,
    EditarexperienciaComponent,
    ProyectoComponent,
    EditarproyectoComponent,
    
  ],
  imports: [
    BrowserModule,
    app_routing,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
