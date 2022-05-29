import { Component, OnInit } from '@angular/core';
import { ConocimientoService } from '../../../servicio/conocimiento.service'
import { Conocimiento } from '../../../modelo/conocimiento'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editarcon',
  templateUrl: './editarcon.component.html',
  styleUrls: ['./editarcon.component.css']
})
export class EditarconComponent implements OnInit {
  conocimientos:Conocimiento[]=[];
  conocimientoForm = new FormGroup({
    id: new FormControl(''),
    id_persona: new FormControl(''),
    tecnologia: new FormControl(''),
    nivel: new FormControl('')
  });

  constructor(private servicio:ConocimientoService) { }
   
  ngOnInit(): void {
        this.getConocimientos();
  }
        public getConocimientos(){
          this.servicio.getConocimientos().subscribe(data => { this.conocimientos=data; console.log(data)})
        }

        public crearConocimiento(){
          
          this.servicio.crearConocimiento(this.conocimientoForm.value).subscribe(data => { this.conocimientos.push(data)
          this.conocimientoForm.reset('');
          this.getConocimientos();
          })
        }

        public borrarConocimiento(id: string){
          this.servicio.borrarConocimiento(id).subscribe(() => {
            this.getConocimientos();
          })
        }

        public editarConocimiento(id: string){
            this.servicio.editarConocimiento(id).subscribe(res => {
              const {id,id_persona,tecnologia,nivel}= res;
              this.conocimientoForm.setValue({id,id_persona,tecnologia,nivel});
              
              this.getConocimientos()
              
            })
            
        }
}
