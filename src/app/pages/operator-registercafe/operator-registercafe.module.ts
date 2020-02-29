import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperatorRegistercafePageRoutingModule } from './operator-registercafe-routing.module';

import { OperatorRegistercafePage } from './operator-registercafe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperatorRegistercafePageRoutingModule
  ],
  declarations: [OperatorRegistercafePage]
})
export class OperatorRegistercafePageModule {}
