import { RouterTestingModule } from '@angular/router/testing';
import { IUnidadeMedidaItem } from './../../models/unidade-medida.model';
import { of, throwError } from 'rxjs';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeMedidaSetupComponent } from './unidade-medida-setup.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UnidadesMedidaService } from '../../services/unidades-medida.service';
import { IUnidadeMedidaResponse } from '../../models/unidade-medida.model';
import { Router } from '@angular/router';

const mockItem: IUnidadeMedidaItem =  {
  CASAS_DECIMAIS: 1,
  SIGLA: 'M',
  NOME: 'Metros'
}

let router = {
  navigate: jasmine.createSpy('navigate')
}

describe('UnidadeMedidaSetupComponent', () => {
  let component: UnidadeMedidaSetupComponent;
  let fixture: ComponentFixture<UnidadeMedidaSetupComponent>;
  let service: UnidadesMedidaService;
  let toastr: ToastrService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadeMedidaSetupComponent ],
      imports:[ HttpClientTestingModule, ToastrModule.forRoot(), RouterTestingModule ],
      providers: [{ provide: Router, useValue: router }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadeMedidaSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(UnidadesMedidaService);
    toastr = TestBed.inject(ToastrService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('save', () => {
    it('should save success', () => {
      spyOn(service, 'createUnidadeMedida').and.returnValue(of(mockItem));
      spyOn(toastr, 'success');
      component.medidasGroup.setValue(mockItem);
      component.save();
      
      expect(toastr.success).toHaveBeenCalled();
      expect(router.navigate).toHaveBeenCalledWith(['/']);
    })

    it('should save error', () => {
      spyOn(service, 'createUnidadeMedida').and.returnValue(throwError(() => '500'));
      spyOn(toastr, 'error');

      component.medidasGroup.setValue(mockItem);

      component.save();

      expect(component.isLoading).toBeFalsy();
    })
  })
});
