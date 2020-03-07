import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
            path:'about',
            loadChildren:() => import('../pages/about/about.module').then(
                m => m.AboutPageModule
            )
        },
        {
            path:'home',
            loadChildren:() => import('../pages/admin-home/admin-home.module').then(
                m => m.AdminHomePageModule
            )
        },
        {
            path:'profile',
            loadChildren:() => import('../pages/profile/profile.module').then(
                m => m.ProfilePageModule
            )
        }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRouter {}