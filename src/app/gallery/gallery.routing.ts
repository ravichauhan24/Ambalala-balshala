import { Routes } from '@angular/router';
import { BalmitraComponent } from './balmitra/balmitra.component';
import { PhotosComponent } from './photos/photos.component';

export const GalleryRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'photos',
        component: PhotosComponent
    },
    {
        path: 'balmitra',
        component: BalmitraComponent
    }
    ]
}];
