import { Routes } from '@angular/router';
import { AcademicCalendarComponent } from './academic-calendar/academic-calendar.component';
import { CampusComponent } from './campus/campus.component';
import { EvalutionComponent } from './evalution/evalution.component';
import { FormComponent } from './form/form.component';
import { LibraryComponent } from './library/library.component';
import { MagazineComponent } from './magazine/magazine.component';
import { NewsComponent } from './news/news.component';
import { PaperComponent } from './paper/paper.component';
import { ResultComponent } from './result/result.component';
import { ScholarshipsComponent } from './scholarships/scholarships.component';
import { SearchComponent } from './search/search.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
export const MoreRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'campus',
        component: CampusComponent
    },
    {
        path: 'search/:id',
        component: SearchComponent
    },
    {
        path: 'evalution',
        component: EvalutionComponent
    },
    {
        path:'academic-calendar',
        component:AcademicCalendarComponent
    },
    {
        path:'form',
        component:FormComponent
    },
    {
        path:'magazine',
        component:MagazineComponent
    },
    {
        path:'news',
        component:NewsComponent
    },
    {
        path:'paper',
        component:PaperComponent
    },
    {
        path:'scholarships',
        component:ScholarshipsComponent
    },
    {
        path:'links/:id',
        component:SyllabusComponent
    },
    {
        path: 'library',
        component: LibraryComponent
    },
    {
        path: 'result',
        component: ResultComponent
    },
   
    ]
}];
