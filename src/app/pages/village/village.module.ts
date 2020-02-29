import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VillagePageRoutingModule } from './village-routing.module';

import { VillagePage } from './village.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VillagePageRoutingModule,
    ComponentsModule
  ],
  declarations: [VillagePage]
})
export class VillagePageModule {}
