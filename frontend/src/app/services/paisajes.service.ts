import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Paisaje} from '../models/paisaje';
import { identifierModuleUrl } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class PaisajesService {
API_URI = 'http://localhost:3000/api';
  constructor( private http: HttpClient) { }

  getPaisajes(){

    return this.http.get(`${this.API_URI}/paisajes`);
  }

  getPaisaje(id:String){
    return this.http.get(`${this.API_URI}/paisajes/${id}`);

  }
  deletePaisaje(id:String){
    return this.http.delete(`${this.API_URI}/paisajes/${id}`);

  }

  crearPaisaje(paisaje: Paisaje){
    return this.http.post(`${this.API_URI}/paisajes`, paisaje);

  }

  updatePaiaje(id: String, updatePaisaje: Paisaje){
    return this.http.put(`${this.API_URI}/paisajes/${id}`, updatePaisaje);

  }
}
