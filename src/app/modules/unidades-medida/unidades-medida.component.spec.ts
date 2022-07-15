import { UnidadesMedidaService } from './services/unidades-medida.service';
import { of, throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { IUnidadeMedidaResponse } from './models/unidade-medida.model';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { UnidadesMedidaComponent } from './unidades-medida.component';
import { ToastrService, ToastrModule } from 'ngx-toastr';

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

describe('UnidadesMedidaComponent', () => {
  let component: UnidadesMedidaComponent;
  let service: UnidadesMedidaService;
  let toastr: ToastrService;
  let fixture: ComponentFixture<UnidadesMedidaComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadesMedidaComponent ],
      imports: [ ReactiveFormsModule, HttpClientModule, ToastrModule.forRoot() ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadesMedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(UnidadesMedidaService);
    toastr = TestBed.inject(ToastrService);
  });

  describe('init', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should get unidade medidas', () => {
      spyOn(component, 'getUnidadesMedida');

      component.ngOnInit();

      expect(component.getUnidadesMedida).toHaveBeenCalled();
    });
  })


  describe('deleteUnidade', () => {
    it('should deleteUnidade success', () => {
      const item = mockList.REGISTROS[0];
      spyOn(service, 'deleteUnidadeMedida').and.returnValue(of('success'));
      spyOn(toastr, 'success');
      component.deleteUnidade(item);

      expect(toastr.success).toHaveBeenCalled();
    })

    it('should deleteUnidade error', () => {
      const item = mockList.REGISTROS[0];
      spyOn(service, 'deleteUnidadeMedida').and.returnValue(throwError(() => '404'));
      spyOn(toastr, 'error');
      
      component.deleteUnidade(item);

      expect(toastr.error).toHaveBeenCalled();
    })
  })
});
