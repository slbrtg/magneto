import { Component, OnInit } from '@angular/core';
import { Torrent } from '../torrent.model';
import { Router } from '@angular/router';
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
  currentRoute: string = this.router.url;

  constructor(private router: Router, private torrentService: TorrentService) { }

  ngOnInit() {
    this.allTorrents = this.torrentService.getAllTorrents();
  }

  torrentDetailPage(clickedTorrent) {
    this.router.navigate(['torrent-page', clickedTorrent.$key]);
  }
}
