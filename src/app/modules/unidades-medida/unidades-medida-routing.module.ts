
import { UnidadesMedidaComponent } from './unidades-medida.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnidadeMedidaSetupComponent } from './components/unidade-medida-setup/unidade-medida-setup.component';

const routes: Routes = [
  {
    path: '',
    component: UnidadesMedidaComponent,
    data: {  title: 'Unidades de Medida' }
  },
  {
    path: 'setup',
    component: UnidadeMedidaSetupComponent,
    data: {  title: 'Cadastro de unidade de medida' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnidadesMedidaRoutingModule { }
