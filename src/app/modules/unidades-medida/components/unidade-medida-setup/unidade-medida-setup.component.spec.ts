import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeMedidaSetupComponent } from './unidade-medida-setup.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('UnidadeMedidaSetupComponent', () => {
  let component: UnidadeMedidaSetupComponent;
  let fixture: ComponentFixture<UnidadeMedidaSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadeMedidaSetupComponent ],
      imports:[ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadeMedidaSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
