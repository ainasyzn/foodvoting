import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { SlidesComponent } from './slides/slides.component';
import { StartComponent } from './start/start.component';
import { SegmentComponent } from './segment/segment.component';
import { LogoutComponent } from './logout/logout.component';
import { ViewOperatorComponent } from './view-operator/view-operator.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { ViewAdminComponent } from './view-admin/view-admin.component';
import { OperatorComponent } from './operator/operator.component';

const components = [
  SlidesComponent, 
  StartComponent, 
  LogoComponent,
  SegmentComponent,
  LogoutComponent,
  ViewOperatorComponent,
  ViewStudentComponent,
  ViewAdminComponent,
  OperatorComponent
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
