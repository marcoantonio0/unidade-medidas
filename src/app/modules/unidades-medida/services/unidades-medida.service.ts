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
  constructor(private http: HttpClient) { }

  getUnidadesMedida(): Observable<IUnidadeMedidaResponse> {
    return this.http.get<IUnidadeMedidaResponse>(this.baseUrl);
  }
}
