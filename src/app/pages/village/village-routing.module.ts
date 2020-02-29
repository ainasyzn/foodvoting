import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VillagePage } from './village.page';

const routes: Routes = [
  {
    path: '',
    component: VillagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VillagePageRoutingModule {}
