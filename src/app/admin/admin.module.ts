import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPage } from './admin.page';
import { AdminRouter } from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminRouter
  ],
  declarations: [AdminPage]
})
export class AdminPageModule {}
