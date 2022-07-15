import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-unidade-medida-setup',
  templateUrl: './unidade-medida-setup.component.html',
  styleUrls: ['./unidade-medida-setup.component.scss']
})
export class UnidadeMedidaSetupComponent implements OnInit {
  medidasGroup = new FormGroup({
    
  })
  constructor() { }

  ngOnInit(): void {
  }

}
