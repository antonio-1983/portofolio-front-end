import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router }from '@angular/router';
import { ProyectoService } from '../../../servicio/proyecto.service'
import { Proyecto } from '../../../modelo/proyecto'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editarproyecto',
  templateUrl: './editarproyecto.component.html',
  styleUrls: ['./editarproyecto.component.css']
})
export class EditarproyectoComponent implements OnInit {
  proyectos:Proyecto[]=[];
  proyectoForm = new FormGroup({
    id: new FormControl(''),
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
       public crearProyecto(){
        this.servicio.crearProyecto(this.proyectoForm.value).subscribe(data => { this.proyectos.push(data)
        this.proyectoForm.reset('');
        this.getProyectos();
        })
      }

      public borrarProyecto(id: string){
        this.servicio.borrarProyecto(id).subscribe(() => {
          this.getProyectos();
        })
      }

      public editarProyecto(id: string){
          this.servicio.editarProyecto(id).subscribe(res => {
            const {id,id_persona,repositorio,imagen,descripcion}= res
            this.proyectoForm.setValue({id,id_persona,repositorio,imagen,descripcion})
            
            this.getProyectos()
          })
          
      } 
  }
