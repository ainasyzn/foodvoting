import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperatorRegistercafePage } from './operator-registercafe.page';

const routes: Routes = [
  {
    path: '',
    component: OperatorRegistercafePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperatorRegistercafePageRoutingModule {}
