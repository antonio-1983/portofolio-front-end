import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from '../../../servicio/experiencia.service'
import { Experiencia } from '../../../modelo/experiencia'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editarexperiencia',
  templateUrl: './editarexperiencia.component.html',
  styleUrls: ['./editarexperiencia.component.css']
})
export class EditarexperienciaComponent implements OnInit {

  experiencias:Experiencia[]=[];
  experienciaForm = new FormGroup({
    id: new FormControl(''),
    empresa: new FormControl(''),
    puesto: new FormControl(''),
    desde: new FormControl(''),
    hasta: new FormControl(''),
    id_persona: new FormControl('')

    
  });

  constructor(private servicio:ExperienciaService) { }
   
  ngOnInit(): void {
        this.getExperiencias();
  }
        public getExperiencias(){
          this.servicio.getExperiencias().subscribe(data => { this.experiencias=data; console.log(data)})
        }

        public crearExperiencia(){
          this.servicio.crearExperiencia(this.experienciaForm.value).subscribe(data => { this.experiencias.push(data)
          this.experienciaForm.reset('');
          this.getExperiencias();
          })
        }

        public borrarExperiencia(id: string){
          this.servicio.borrarExperiencia(id).subscribe(() => {
            this.getExperiencias();
          })
        }

        public editarExperiencia(id: string){
            this.servicio.editarExperiencia(id).subscribe(res => {
              const {id,empresa,puesto,desde,hasta,id_persona}= res;
              this.experienciaForm.setValue({id,empresa,puesto,desde,hasta,id_persona});
              
              this.getExperiencias()
              
            })
            
        }
}