import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router }from '@angular/router';
import { ConocimientoService } from '../../servicio/conocimiento.service'
import { Conocimiento } from '../../modelo/conocimiento'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-conocimiento',
  templateUrl: './conocimiento.component.html',
  styleUrls: ['./conocimiento.component.css']
})
export class ConocimientoComponent implements OnInit {
  
  conocimientos:Conocimiento[]=[];
  conocimientoForm = new FormGroup({
    id_persona: new FormControl(''),
    tecnologia: new FormControl(''),
    nivel: new FormControl('')
  });

  constructor(private servicio:ConocimientoService) { }
   
   ngOnInit(): void {
        /* this.servicio.getConocimientos().subscribe(data => { this.conocimientos=data; console.log(data)}) */
        this.getConocimientos();
     }
        public getConocimientos(){
          this.servicio.getConocimientos().subscribe(data => { this.conocimientos=data; console.log(data)})
        }

   }
 
 
 