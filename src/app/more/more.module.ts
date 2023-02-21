import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampusComponent } from './campus/campus.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MoreRoutes } from './more.routing';
import { SearchComponent } from './search/search.component';
import { EvalutionComponent } from './evalution/evalution.component';
import { AcademicCalendarComponent } from './academic-calendar/academic-calendar.component';
import { HomeModule } from '../home/home.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormComponent } from './form/form.component';
import { LibraryComponent } from './library/library.component';
import { MagazineComponent } from './magazine/magazine.component';
import { NewsComponent } from './news/news.component';
import { PaperComponent } from './paper/paper.component';
import { ResultComponent } from './result/result.component';
import { ScholarshipsComponent } from './scholarships/scholarships.component';
import { SyllabusComponent } from './syllabus/syllabus.component';



@NgModule({
  declarations: [
    CampusComponent,
    SearchComponent,
    EvalutionComponent,
    AcademicCalendarComponent,
    FormComponent,
    LibraryComponent,
    MagazineComponent,
    NewsComponent,
    PaperComponent,
    ResultComponent,
    ScholarshipsComponent,
    SyllabusComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(MoreRoutes),
    HomeModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class MoreModule { }
