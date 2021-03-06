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

  getTorrentById(torrentId: string){
    return this.database.object('torrents/' + torrentId);
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

  updateTorrent(localUpdatedTorrent) {
    var torrentEntryInFirebase = this.getTorrentById(localUpdatedTorrent.$key);
    torrentEntryInFirebase.update({title: localUpdatedTorrent.title, category: localUpdatedTorrent.category, description: localUpdatedTorrent.description, filetype: localUpdatedTorrent.filetype, systems: localUpdatedTorrent.systems, filesize: localUpdatedTorrent.filesize, magnet: localUpdatedTorrent.magnet});
  }

  deleteTorrent(localDeleteTorrent) {
    var torrentEntryInFirebase = this.getTorrentById(localDeleteTorrent.$key);
    torrentEntryInFirebase.remove();
  }
}
