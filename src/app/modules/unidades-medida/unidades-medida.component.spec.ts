import { HttpClientModule } from '@angular/common/http';
import { IUnidadeMedidaResponse } from './models/unidade-medida.model';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { UnidadesMedidaComponent } from './unidades-medida.component';

describe('UnidadesMedidaComponent', () => {
  let component: UnidadesMedidaComponent;
  let fixture: ComponentFixture<UnidadesMedidaComponent>;
  let mockData: IUnidadeMedidaResponse;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadesMedidaComponent ],
      imports: [ ReactiveFormsModule, HttpClientModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadesMedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('init', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should get unidade medidas', () => {
      expect(component.getUnidadesMedida).toHaveBeenCalled();
    });
  })

  

  it('should delete an unidade medida', () => {
    
  })
});
