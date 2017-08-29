import { Component, OnInit } from '@angular/core';
import { TorrentService } from '../torrent.service';
import { FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.css'],
  providers: [TorrentService]
})
export class DisclaimerComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
