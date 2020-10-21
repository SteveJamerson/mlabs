import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule,
  ]
})
export class SharedModule { }
