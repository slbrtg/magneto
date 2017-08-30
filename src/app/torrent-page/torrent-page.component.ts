import { Component, OnInit } from '@angular/core';
import { Torrent } from '../torrent.model';
import { TorrentService } from '../torrent.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-torrent-page',
  templateUrl: './torrent-page.component.html',
  styleUrls: ['./torrent-page.component.css'],
  providers: [TorrentService]
})
export class TorrentPageComponent implements OnInit {
  torrentId: string
  torrentToDisplay;

  constructor(private torrentService: TorrentService) { }

  ngOnInit() {

  }

  // submitForm(title: string, category: string, description: string, filetype: string, systems: string, filesize: number, magnet: string) {
  //   var newTorrent: Torrent = new Torrent(title, category, description, filetype, systems, filesize, magnet);
  //   this.torrentService.addTorrent(newTorrent);
  // }

}
