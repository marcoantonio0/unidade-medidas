import { ToastrService } from 'ngx-toastr';
import { UnidadesMedidaService } from './services/unidades-medida.service';
import { Component, OnInit } from '@angular/core';
import { IUnidadeMedidaItem } from './models/unidade-medida.model';
import { catchError, EMPTY, finalize, map, take, tap } from 'rxjs';

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
    private unidadesMedidaService: UnidadesMedidaService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getUnidadesMedida();
  }

  getUnidadesMedida(){
    this.isLoading = true;
    this.unidadesMedidaService.getUnidadesMedida().pipe(
      map(result => {
        this.qtdRegistros = result.TOTAL_REGISTROS;
        this.unidadesMedidas = result.REGISTROS;
        console.log(this.unidadesMedidas);
      }),
      catchError(() => {
        return EMPTY;
      }),
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe()
  }

  deleteUnidade(item: IUnidadeMedidaItem){
    this.unidadesMedidaService.deleteUnidadeMedida(item.CODIGO).pipe(
      tap(result => {
        this.toastr.success('Unidade de medida removida com sucesso.');
        this.getUnidadesMedida();
      },
      catchError(() => {
        this.toastr.error('Não foi possivel remover unidade de medida.');
        return EMPTY;
      })
    )).subscribe();
  }

}
