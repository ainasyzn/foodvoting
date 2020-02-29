import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperatorPage } from './operator.page';

const routes: Routes = [
  {    
    path: '',
    redirectTo: '/operator/home', 
    pathMatch: 'full',
  },
  {
    path: '',
    component: OperatorPage,
    children: [
        {
            path:'menu',
            loadChildren:() => import('../pages/operator-mycafe/operator-mycafe.module').then(
                m => m.OperatorMycafePageModule
            )
        },
        {
            path:'home',
            loadChildren:() => import('../pages/operator-home/operator-home.module').then(
                m => m.OperatorHomePageModule
            )
        },
        {
            path:'profile',
            loadChildren:() => import('../pages/operator-profile/operator-profile.module').then(
                m => m.OperatorProfilePageModule
            )
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperatorPageRoutingModule {}
