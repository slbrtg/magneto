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
import { TorrentService } from './torrent.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SearchPipe } from './search.pipe';
import { SanitizeUrlPipe } from './sanitize-url.pipe';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { TorrentEditComponent } from './torrent-edit/torrent-edit.component';
import { CommentFilterPipe } from './comment-filter.pipe';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { AdminComponent } from './admin/admin.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuardService } from './auth-guard.service';


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
    SearchPipe,
    SanitizeUrlPipe,
    DisclaimerComponent,
    TorrentEditComponent,
    CommentFilterPipe,
    AddCommentComponent,
    AdminComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [AuthGuardService, TorrentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
