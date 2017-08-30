import { Injectable } from '@angular/core';
import { Torrent } from './torrent.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class TorrentService {
  torrents: FirebaseListObservable<any[]>;
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, private database: AngularFireDatabase) {
    this.torrents = database.list('torrents');
    this.user = afAuth.authState;
  }

  getAllTorrents(){
    return this.torrents;
  }

  addTorrent(newTorrent: Torrent) {
    this.torrents.push(newTorrent);
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
