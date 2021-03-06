import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'home/:id',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'village/:id',
    loadChildren: () => import('./pages/village/village.module').then( m => m.VillagePageModule)
  },
  {
    path: 'operator/village/:id',
    loadChildren: () => import('./pages/operator-village/operator-village.module').then( m => m.OperatorVillagePageModule)
  },
  {
    path: 'details/:type/:id',
    loadChildren: () => import('./pages/todo-details/todo-details.module').then( m => m.TodoDetailsPageModule)
  },
  {
    path: 'operator',
    loadChildren: () => import('./operator/operator.module').then( m => m.OperatorPageModule)
  },
  {
    path: 'operator/mycafe',
    loadChildren: () => import('./pages/operator-mycafe/operator-mycafe.module').then( m => m.OperatorMycafePageModule)
  },
  {
    path: 'operator/home',
    loadChildren: () => import('./pages/operator-home/operator-home.module').then( m => m.OperatorHomePageModule)
  },
  {
    path: 'operator/profile',
    loadChildren: () => import('./pages/operator-profile/operator-profile.module').then( m => m.OperatorProfilePageModule)
  },
  {
    path: 'operator/register',
    loadChildren: () => import('./pages/operator-registercafe/operator-registercafe.module').then( m => m.OperatorRegistercafePageModule)
  },
  {
    path: 'myaccount',
    loadChildren: () => import('./pages/myaccount/myaccount.module').then( m => m.MyaccountPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'admin-village/:id',
    loadChildren: () => import('./pages/admin-village/admin-village.module').then( m => m.AdminVillagePageModule)
  },
  {
    path: 'student/menu/details/:id',
    loadChildren: () => import('./pages/student-menu-details/student-menu-details.module').then( m => m.StudentMenuDetailsPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
