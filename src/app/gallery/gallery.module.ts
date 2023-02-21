import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos/photos.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { GalleryRoutes } from './gallery.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BalmitraComponent } from './balmitra/balmitra.component';
import { HomeModule } from '../home/home.module';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    PhotosComponent,
    BalmitraComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeModule,
    NgxPaginationModule,
    RouterModule.forChild(GalleryRoutes),
    NgbModule,
  ]
})
export class GalleryModule { }
