import { IUnidadeMedidaResponse } from './../models/unidade-medida.model';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UnidadesMedidaService } from './unidades-medida.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';


const mockList: IUnidadeMedidaResponse = {
  TOTAL_REGISTROS: 1,
  REGISTROS: [
    {
      CODIGO: 1,
      CASAS_DECIMAIS: 1,
      SIGLA: 'M',
      QUANTIDADE_FRACIONADA: 'N',
      NOME: 'Metros'
    }
  ]
};

describe('UnidadesMedidaService', () => {
  let service: UnidadesMedidaService;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(UnidadesMedidaService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getUnidadesMedida', () => {
    let mockResponse: any;
    spyOn(httpClient,'get').and.returnValue(of(mockList));

    service.getUnidadesMedida().subscribe(res => mockResponse = res);

    expect(mockResponse).toEqual(mockList);
  })
});
