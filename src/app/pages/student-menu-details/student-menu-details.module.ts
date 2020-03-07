import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentMenuDetailsPageRoutingModule } from './student-menu-details-routing.module';

import { StudentMenuDetailsPage } from './student-menu-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentMenuDetailsPageRoutingModule
  ],
  declarations: [StudentMenuDetailsPage]
})
export class StudentMenuDetailsPageModule {}
