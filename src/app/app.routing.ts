import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './root/app.component';
import { TorrentListComponent } from './torrent-list/torrent-list.component';
import { TorrentPageComponent } from './torrent-page/torrent-page.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'torrent-list',
    component: TorrentListComponent
  },

  {
    path: 'torrent-page/:id',
    component: TorrentPageComponent
  },

  {
    path: 'disclaimer',
    component: DisclaimerComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
