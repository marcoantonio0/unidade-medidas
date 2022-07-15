import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { UnidadesMedidaRoutingModule } from './unidades-medida-routing.module';
import { UnidadesMedidaComponent } from './unidades-medida.component';
import {MatCardModule} from '@angular/material/card';
import { UnidadeMedidaSetupComponent } from './components/unidade-medida-setup/unidade-medida-setup.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { UnidadesMedidaService } from './services/unidades-medida.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    UnidadesMedidaComponent,
    UnidadeMedidaSetupComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatListModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    UnidadesMedidaRoutingModule
  ],
  providers:[UnidadesMedidaService]
})
export class UnidadesMedidaModule { }
