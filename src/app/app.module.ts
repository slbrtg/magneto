import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './root/app.component';
import { HomeComponent } from './home/home.component';
import { TorrentListComponent } from './torrent-list/torrent-list.component';
import { TorrentPageComponent } from './torrent-page/torrent-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TorrentListComponent,
    TorrentPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
