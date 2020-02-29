import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperatorPageRoutingModule } from './operator-routing.module';

import { OperatorPage } from './operator.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperatorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [OperatorPage]
})
export class OperatorPageModule {}
