import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cpfTdfValidatorDirective } from './cpf-tdf.validator';


@NgModule({
  declarations: [cpfTdfValidatorDirective],
  imports: [
    CommonModule
  ],
  exports: [cpfTdfValidatorDirective]
})
export class ValidacaoModule { }
