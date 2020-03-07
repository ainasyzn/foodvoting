import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentMenuDetailsPage } from './student-menu-details.page';

const routes: Routes = [
  {
    path: '',
    component: StudentMenuDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentMenuDetailsPageRoutingModule {}
