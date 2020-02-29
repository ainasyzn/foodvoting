import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperatorVillagePage } from './operator-village.page';

const routes: Routes = [
  {
    path: '',
    component: OperatorVillagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperatorVillagePageRoutingModule {}
