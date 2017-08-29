import { Component, OnInit } from '@angular/core';
import { Torrent } from '../torrent.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  torrents: FirebaseListObservable<any[]>;

  constructor() { }

  ngOnInit() {

  }
}
