import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {    
    path: '',
    redirectTo: '/admin/home', 
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminPage,
    children: [
        {
            path:'home',
            loadChildren:() => import('../pages/admin-home/admin-home.module').then(
                m => m.AdminHomePageModule
            )
        },
        {
            path:'profile',
            loadChildren:() => import('../pages/admin-profile/admin-profile.module').then(
                m => m.AdminProfilePageModule
            )
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
