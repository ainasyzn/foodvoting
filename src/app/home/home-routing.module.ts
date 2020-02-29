import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {    
    path: '',
    redirectTo: '/home/home', 
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomePage,
    children: [
        {
            path:'about',
            loadChildren:() => import('../pages/about/about.module').then(
                m => m.AboutPageModule
            )
        },
        {
            path:'home',
            loadChildren:() => import('../pages/home/home.module').then(
                m => m.HomePageModule
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

export class HomeRouter {}