import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Experiencia} from '../modelo/experiencia';
import { environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url:string = environment.baseURL
  constructor(private http:HttpClient) { }

  public getExperiencias(){
    return this.http.get<Experiencia[]>(this.url+'/ver/experiencias')
  }
  public crearExperiencia(obj:Experiencia){
    return this.http.post<Experiencia>(this.url+'/new/experiencia',obj);
  }

  public borrarExperiencia(id:string){
    return this.http.delete(this.url+`/delete/experiencia/${id}`);
  }

  public editarExperiencia(id:string){
    return this.http.get<Experiencia>(this.url+`/buscar/experiencia/${id}`);
  }

}
