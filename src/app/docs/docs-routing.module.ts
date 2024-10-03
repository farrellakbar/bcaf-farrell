import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocComponent } from './pages/doc/doc.component';
import { GuardService } from '../core/services/guard.service';

const routes: Routes = [
  {
    path: 'doc',
    component: DocComponent,
    canActivate: [GuardService]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule { }
