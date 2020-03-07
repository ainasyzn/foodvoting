import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminVillagePageRoutingModule } from './admin-village-routing.module';

import { AdminVillagePage } from './admin-village.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminVillagePageRoutingModule,
    ComponentsModule
  ],
  declarations: [AdminVillagePage]
})
export class AdminVillagePageModule {}
