import { Component, OnInit } from '@angular/core';
import { Torrent } from '../torrent.model';
import { TorrentService } from '../torrent.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-torrent-list',
  templateUrl: './torrent-list.component.html',
  styleUrls: ['./torrent-list.component.css'],
  providers: [TorrentService]
})
export class TorrentListComponent implements OnInit {
  allTorrents: FirebaseListObservable<any[]>;

  constructor(private torrentService: TorrentService) { }

  ngOnInit() {
    this.allTorrents = this.torrentService.getAllTorrents();
  }

}
