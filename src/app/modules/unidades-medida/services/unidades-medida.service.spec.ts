import { environment } from './../../../../environments/environment';
import { IUnidadeMedidaResponse, IUnidadeMedidaItem } from './../models/unidade-medida.model';
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
    expect(httpClient.get).toHaveBeenCalledWith(`${environment.baseUrl}`, { params: { token: environment.token } });
  })

  it('should call createUnidadeMedida', () => {
    let mockData: IUnidadeMedidaItem = {
      CASAS_DECIMAIS: 1,
      QUANTIDADE_FRACIONADA: 'N',
      SIGLA: 'MT',
      NOME: 'Metros quadrados'
    }
    let mockResponse: any;

    spyOn(httpClient,'post').and.returnValue(of(mockData));
    
    service.createUnidadeMedida(mockData).subscribe(res => mockResponse = res);
   
    expect(mockResponse).toEqual(mockData);
    expect(httpClient.post).toHaveBeenCalledWith(`${environment.baseUrl}`, mockData, { params: { token: environment.token } });
  })

  it('should call deleteUnidadeMedida', () => {
    spyOn(httpClient,'delete').and.returnValue(of('success'));
    let idDelete = 1;

    service.deleteUnidadeMedida(idDelete).subscribe();
    expect(httpClient.delete).toHaveBeenCalledWith(`${environment.baseUrl}/${idDelete}`, { params: { token: environment.token } });
  })
});
