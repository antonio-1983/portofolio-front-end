import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conocimiento} from '../modelo/conocimiento';
import { environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ConocimientoService {
  url:string = environment.baseURL
  constructor(private http:HttpClient) { }

  public getConocimientos(){
    return this.http.get<Conocimiento[]>(this.url+'/ver/conocimientos')
  }

  public crearConocimiento(obj:Conocimiento){
    return this.http.post<Conocimiento>(this.url+'/new/conocimiento',obj);
  }

  public borrarConocimiento(id:string){
    return this.http.delete(this.url+`/delete/conocimiento/${id}`);
  }

  public editarConocimiento(id:string){
    return this.http.get<Conocimiento>(this.url+`/buscar/conocimiento/${id}`);
  }
}
