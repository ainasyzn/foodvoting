import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperatorMycafePageRoutingModule } from './operator-mycafe-routing.module';

import { OperatorMycafePage } from './operator-mycafe.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperatorMycafePageRoutingModule,
    ComponentsModule
  ],
  declarations: [OperatorMycafePage]
})
export class OperatorMycafePageModule {}
