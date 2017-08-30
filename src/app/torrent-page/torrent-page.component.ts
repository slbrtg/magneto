import { Component, OnInit } from '@angular/core';
import { Torrent } from '../torrent.model';
import { TorrentService } from '../torrent.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-torrent-page',
  templateUrl: './torrent-page.component.html',
  styleUrls: ['./torrent-page.component.css'],
  providers: [TorrentService]
})
export class TorrentPageComponent implements OnInit {
  torrentId: string;
  torrentToDisplay;

  constructor(private location: Location,private route: ActivatedRoute, private torrentService: TorrentService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.torrentId = urlParameters['id'];
    });
    this.torrentToDisplay = this.torrentService.getTorrentById(this.torrentId);
  }

  sanitizeUrl(torrent: Torrent){
    return this.sanitizer.bypassSecurityTrustResourceUrl(torrent.magnet);
  }

}
