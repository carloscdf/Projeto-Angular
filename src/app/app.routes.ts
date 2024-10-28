import { Routes } from '@angular/router';

import { TopBannerComponent } from './components/top-banner/top-banner.component';
import { SelectedAlbumComponent } from './components/selected-album/selected-album.component';

export const routes: Routes = [
    {path: '', component:TopBannerComponent, title: 'Início' },
    {path: 'album/:id', component:SelectedAlbumComponent, title: 'Album'},
];
