import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router }from '@angular/router';
import { ProyectoService } from '../../servicio/proyecto.service'
import { Proyecto } from '../../modelo/proyecto'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  proyectos:Proyecto[]=[];
  proyectoForm = new FormGroup({
    id_persona: new FormControl(''),
    descripcion: new FormControl(''),
    imagen: new FormControl(''),
    repositorio: new FormControl('')
  });

  constructor(private servicio:ProyectoService) { }
   
   ngOnInit(): void {
        /* this.servicio.getConocimientos().subscribe(data => { this.conocimientos=data; console.log(data)}) */
        this.getProyectos();
     }
        public getProyectos(){
          this.servicio.getProyectos().subscribe(data => { this.proyectos=data; console.log(data)})
        }

   }
 