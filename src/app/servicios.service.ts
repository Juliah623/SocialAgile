import { Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ServiciosService {
  url = 'https://tuplansrv.herokuapp.com/api/categoria';

  constructor(private http: HttpClient) {
  }

  getCategoria() {
    return this.http.get(this.url);
  }
}

export interface Categoria {
  nombre: string;
  descripcion: string;
  img: string;
  id: string;
}
