import { Component, OnInit } from '@angular/core';
import { Torrent } from '../torrent.model';
import { Router } from '@angular/router';
import { TorrentService } from '../torrent.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-torrent-list',
  templateUrl: './torrent-list.component.html',
  styleUrls: ['./torrent-list.component.css'],
  providers: [TorrentService]
})
export class TorrentListComponent implements OnInit {
  allTorrents: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  safeUrl;

  constructor(private router: Router, private torrentService: TorrentService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
      this.allTorrents = this.torrentService.getAllTorrents();
      // console.log(this.allTorrents);
      // setTimeout(function(){
      //   this.sanitizeUrl(this.allTorrents)
      // }.bind(this), 1000);
  }

  torrentDetailPage(clickedTorrent) {
    this.router.navigate(['torrent-page', clickedTorrent.$key]);
  }

  // sanitizeUrl(torrents){
  //   for (let key in torrents){
  //     this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(torrents[key].magnet);
  //   }
  // }

}
