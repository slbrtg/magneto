import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './root/app.component';
import { HomeComponent } from './home/home.component';
import { TorrentListComponent } from './torrent-list/torrent-list.component';
import { TorrentPageComponent } from './torrent-page/torrent-page.component';
import { masterFirebaseConfig } from './api-keys';
import { SanitizeUrlPipe } from './sanitize-url.pipe';
import { AngularFireModule } from 'angularfire2';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TorrentListComponent,
    TorrentPageComponent,
    SanitizeUrlPipe,
    DisclaimerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
