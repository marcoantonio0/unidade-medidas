import { Router } from '@angular/router';
import { take } from 'rxjs';
import { UnidadesMedidaService } from './../../services/unidades-medida.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-unidade-medida-setup',
  templateUrl: './unidade-medida-setup.component.html',
  styleUrls: ['./unidade-medida-setup.component.scss']
})
export class UnidadeMedidaSetupComponent implements OnInit {
  isLoading = false;
  medidasGroup = new FormGroup({
    NOME: new FormControl('', [Validators.required]),
    SIGLA: new FormControl('', [Validators.required]),
    CASAS_DECIMAIS: new FormControl('', [Validators.required])
  })
  
  constructor(
    private unidadesMedidaService: UnidadesMedidaService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  save(){
    if(this.medidasGroup.valid){
      let data = { ...this.medidasGroup.value, CASAS_DECIMAIS: parseFloat(this.medidasGroup.value['CASAS_DECIMAIS'])  }
      this.unidadesMedidaService.createUnidadeMedida(data)
      .pipe(take(1)).subscribe({
        next: (result) => {
          this.toastr.success('Unidade de medida criado com sucesso.');
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.toastr.error(err.error.message);
        },
        complete: () => {
          this.isLoading = false;
        }
      })
    } else {
      this.toastr.warning('Preencha todos os campos antes de salvar.');
      this.medidasGroup.markAllAsTouched();
    }
  }

}
