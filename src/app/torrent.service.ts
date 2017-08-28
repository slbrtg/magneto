import { Injectable } from '@angular/core';
import { Torrent } from './torrent.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class TorrentService {
  torrents: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.torrents = database.list('torrents');
  }

  getAllTorrents(){
    return this.torrents;
  }

}
