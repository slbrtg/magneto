import { Component, OnInit } from '@angular/core';
import { Torrent } from '../torrent.model';
import { TorrentService } from '../torrent.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { CommentService } from '../comment.service';
import { Comment } from '../comment.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { CommentFilterPipe } from '../comment-filter.pipe';


@Component({
  selector: 'app-torrent-page',
  templateUrl: './torrent-page.component.html',
  styleUrls: ['./torrent-page.component.css'],
  providers: [TorrentService, CommentService]
})
export class TorrentPageComponent implements OnInit {
  torrentId: string;
  torrentToDisplay;
  comments: FirebaseListObservable<any[]>;

  constructor(private location: Location,private route: ActivatedRoute, private torrentService: TorrentService, private sanitizer: DomSanitizer, private commentService: CommentService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.torrentId = urlParameters['id'];
    });
    this.torrentToDisplay = this.torrentService.getTorrentById(this.torrentId);
    this.comments = this.commentService.getAllComments();

  }

  sanitizeUrl(torrent: Torrent){
    return this.sanitizer.bypassSecurityTrustResourceUrl(torrent.magnet);
  }

}
