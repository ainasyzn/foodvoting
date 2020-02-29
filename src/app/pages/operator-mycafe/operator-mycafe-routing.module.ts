import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperatorMycafePage } from './operator-mycafe.page';

const routes: Routes = [
  {
    path: '',
    component: OperatorMycafePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperatorMycafePageRoutingModule {}
