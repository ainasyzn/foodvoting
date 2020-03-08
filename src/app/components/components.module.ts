import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegmentComponent } from './segment/segment.component';
import { ViewOperatorComponent } from './view-operator/view-operator.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { ViewAdminComponent } from './view-admin/view-admin.component';
import { AdminSegmentComponent } from './admin-segment/admin-segment.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

const components = [
  SegmentComponent,
  AdminSegmentComponent,
  ViewOperatorComponent,
  ViewStudentComponent,
  ViewAdminComponent
]

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule {
}
