import { IUnidadeMedidaItem } from './../models/unidade-medida.model';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUnidadeMedidaResponse } from '../models/unidade-medida.model';

@Injectable({
  providedIn: 'root'
})
export class UnidadesMedidaService {
  private baseUrl = `${environment.baseUrl}`;
  options = { params: { token: environment.token } };
  constructor(private http: HttpClient) { }

  getUnidadesMedida(): Observable<IUnidadeMedidaResponse> {
    return this.http.get<IUnidadeMedidaResponse>(this.baseUrl, this.options);
  }

  createUnidadeMedida(data: IUnidadeMedidaItem): Observable<IUnidadeMedidaItem>{
    return this.http.post<IUnidadeMedidaItem>(this.baseUrl, data, this.options);
  }

  deleteUnidadeMedida(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, this.options);
  }
}
