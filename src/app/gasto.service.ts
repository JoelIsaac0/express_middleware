import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gasto } from './Gasto';
const configUrl = 'assets/datos.json'
@Injectable({
  providedIn: 'root'
})
export class GastoService {

  constructor(private httpclient: HttpClient) {
    console.log('El servicio Http esta funcionando…')
    }

    obtnerDatos(){
      return this.httpclient.get<Gasto[]>(configUrl);
    }
}
