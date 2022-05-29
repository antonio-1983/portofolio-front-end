import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proyecto} from '../modelo/proyecto';
import { environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url:string = environment.baseURL
  constructor(private http:HttpClient) { }

  public getProyectos(){
    return this.http.get<Proyecto[]>(this.url+'/ver/proyectos')
  }
  public crearProyecto(obj:Proyecto){
    return this.http.post<Proyecto>(this.url+'/new/proyecto',obj);
  }

  public borrarProyecto(id:string){
    return this.http.delete(this.url+`/delete/proyecto/${id}`);
  }

  public editarProyecto(id:string){
    return this.http.get<Proyecto>(this.url+`/buscar/proyecto/${id}`);
  }

}