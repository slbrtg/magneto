import { Component, OnInit } from '@angular/core';
import { Torrent } from '../torrent.model';
import { TorrentService } from '../torrent.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [TorrentService]
})
export class AdminComponent implements OnInit {

  constructor(private torrentService: TorrentService) { }

  ngOnInit() {
  }

  submitForm(title: string, category: string, description: string, filetype: string, systems: string, filesize: string, magnet: string) {
    var newTorrent: Torrent = new Torrent(title, category, description, filetype, systems, filesize, magnet);
    this.torrentService.addTorrent(newTorrent);
  }

}
