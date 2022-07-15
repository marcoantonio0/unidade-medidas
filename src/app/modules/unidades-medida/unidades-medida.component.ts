import { UnidadesMedidaService } from './services/unidades-medida.service';
import { Component, OnInit } from '@angular/core';
import { IUnidadeMedidaItem } from './models/unidade-medida.model';
import { take } from 'rxjs';

@Component({
  selector: 'app-unidades-medida',
  templateUrl: './unidades-medida.component.html',
  styleUrls: ['./unidades-medida.component.scss']
})
export class UnidadesMedidaComponent implements OnInit {
  public unidadesMedidas: IUnidadeMedidaItem[] = [];
  public qtdRegistros = 0;
  public isLoading = false;
  constructor(
    private unidadesMedidaService: UnidadesMedidaService
  ) { }

  ngOnInit(): void {
    this.getUnidadesMedida();
  }

  getUnidadesMedida(){
    this.isLoading = true;
    this.unidadesMedidaService.getUnidadesMedida().pipe(take(1))
    .subscribe({
      next: (result) => {
        this.qtdRegistros = result.TOTAL_REGISTROS;
        this.unidadesMedidas = result.REGISTROS;
      },
      error: (error) => {

      },
      complete: () => {
        this.isLoading = false;
      }
    })
  }

  deleteUnidade(item: IUnidadeMedidaItem){

  }

}
