import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsRoutingModule } from './docs-routing.module';
import { DocComponent } from './pages/doc/doc.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DocComponent
  ],
  imports: [
    CommonModule,
    DocsRoutingModule,
    SharedModule
  ]
})
export class DocsModule { }
