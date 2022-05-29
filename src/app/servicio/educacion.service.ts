import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Educacion} from '../modelo/educacion';
import { environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url:string = environment.baseURL
  constructor(private http:HttpClient) { }

  public getEducaciones(){
    return this.http.get<Educacion[]>(this.url+'/ver/educaciones')
  }

  public crearEducacion(obj:Educacion){
    return this.http.post<Educacion>(this.url+'/new/educacion',obj);
  }

  public borrarEducacion(id:string){
    return this.http.delete(this.url+`/delete/educacion/${id}`);
  }

  public editarEducacion(id:string){
    return this.http.get<Educacion>(this.url+`/buscar/educacion/${id}`);
  }

}
