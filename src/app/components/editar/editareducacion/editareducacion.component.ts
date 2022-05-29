import { Component, OnInit } from '@angular/core';
import { EducacionService } from '../../../servicio/educacion.service'
import { Educacion } from '../../../modelo/educacion'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editareducacion',
  templateUrl: './editareducacion.component.html',
  styleUrls: ['./editareducacion.component.css']
})
export class EditareducacionComponent implements OnInit {

  educacionForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    titulo: new FormControl(''),
    desde: new FormControl(''),
    hasta: new FormControl(''),
    id_persona: new FormControl('')

  });

  constructor(private servicio:EducacionService) { }
  educaciones:Educacion[]=[];
  ngOnInit(): void {
        this.getEducaciones();
  }
        public getEducaciones(){
          this.servicio.getEducaciones().subscribe(data => { this.educaciones=data; console.log(data)})
        }

        public crearEducacion(){
          this.servicio.crearEducacion(this.educacionForm.value).subscribe(data => { this.educaciones.push(data)
          this.educacionForm.reset('');
          this.getEducaciones();
          })
        }

        public borrarEducacion(id: string){
          this.servicio.borrarEducacion(id).subscribe(() => {
            this.getEducaciones();
          })
        }

        public editarEducacion(id: string){
            this.servicio.editarEducacion(id).subscribe(res => {
              const {id,nombre,titulo,desde,hasta,id_persona}= res
              this.educacionForm.setValue({id,nombre,titulo,desde,hasta,id_persona})
              
              this.getEducaciones()
            })
            
        }
}
