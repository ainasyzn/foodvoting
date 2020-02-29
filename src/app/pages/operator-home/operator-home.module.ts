import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperatorHomePageRoutingModule } from './operator-home-routing.module';

import { OperatorHomePage } from './operator-home.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperatorHomePageRoutingModule,
    ComponentsModule
  ],
  declarations: [OperatorHomePage]
})
export class OperatorHomePageModule {}
