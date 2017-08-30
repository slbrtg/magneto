import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Torrent } from './torrent.model';

@Pipe({
  name: 'sanitizeUrl'
})
export class SanitizeUrlPipe implements PipeTransform {
  safeUrl;
  constructor(private sanitizer: DomSanitizer){}

  transform(torrents: Torrent) {
    for (let key in torrents){
      let currentTorrent = this.sanitizer.bypassSecurityTrustResourceUrl(torrents[key].magnet);
      torrents[key].magnet = currentTorrent;
      this.safeUrl = currentTorrent;

      console.log(torrents[key].magnet + " Torrent Key Magnet");
      console.log("SAFE URL " + this.safeUrl );

    }
    return torrents;
  }

}
