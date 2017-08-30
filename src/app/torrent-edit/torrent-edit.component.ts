import { Component, OnInit, Input } from '@angular/core';
import { Torrent } from '../torrent.model';
import { TorrentService } from '../torrent.service';

@Component({
  selector: 'app-torrent-edit',
  templateUrl: './torrent-edit.component.html',
  styleUrls: ['./torrent-edit.component.css'],
  providers: [TorrentService]
})
export class TorrentEditComponent implements OnInit {
  @Input () seletedTorrent;

  constructor(private torrentService: TorrentService) { }


  ngOnInit() {
  }

}
