import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router }from '@angular/router';
import { ExperienciaService } from '../../servicio/experiencia.service'
import { Experiencia } from '../../modelo/experiencia'

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias:Experiencia[]=[];

 constructor(private servicio:ExperienciaService) { }
  
  ngOnInit(): void {
        this.servicio.getExperiencias().subscribe(data => { this.experiencias=data; console.log(data)})

    }
  }


