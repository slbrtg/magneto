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
  @Input () selectedTorrent;

  constructor(private torrentService: TorrentService) { }

  ngOnInit() {
  }

  editTorrent(torrentToEdit) {
    this.torrentService.updateTorrent(torrentToEdit);
  }

  deleteTorrent(torrentToDelete) {
    if(confirm("Do you want to continue to delete this post?")) {
      this.torrentService.deleteTorrent(torrentToDelete);
    }
  }

}
