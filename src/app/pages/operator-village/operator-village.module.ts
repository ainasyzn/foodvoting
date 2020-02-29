import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperatorVillagePageRoutingModule } from './operator-village-routing.module';

import { OperatorVillagePage } from './operator-village.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperatorVillagePageRoutingModule,
    ComponentsModule
  ],
  declarations: [OperatorVillagePage]
})
export class OperatorVillagePageModule {}
