import { Component } from '@angular/core';
import { TorrentService } from '../torrent.service';
import { Router } from '@angular/router';
import { Torrent } from '../torrent.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TorrentService]
})
export class AppComponent {
  user;
  private isLoggedIn: Boolean;
  private userName: String

  constructor(public torrentService: TorrentService) {
    this.torrentService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;

      }
    });
  }

  login() {
    this.torrentService.login();
  }

  logout() {
    this.torrentService.logout();
  }
 }
