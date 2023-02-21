import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KGComponent } from './kg/kg.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DepartmentRoutes } from './department.routing';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    KGComponent,
    StaffDetailsComponent,
    StudentDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(DepartmentRoutes),
    NgxPaginationModule,
    NgbModule,
  ]
})
export class DepartmentModule { }
