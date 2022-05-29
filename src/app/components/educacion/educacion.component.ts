import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router }from '@angular/router';
import { EducacionService } from '../../servicio/educacion.service'
import { Educacion } from '../../modelo/educacion'

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educaciones:Educacion[]=[];

 constructor(private servicio:EducacionService) { }
  
  ngOnInit(): void {
        this.servicio.getEducaciones().subscribe(data => { this.educaciones=data; console.log(data)})

    }
  }
