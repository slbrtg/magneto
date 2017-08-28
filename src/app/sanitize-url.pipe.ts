import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Torrent } from './torrent.model';

@Pipe({
  name: 'sanitizeUrl'
})
export class SanitizeUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer){}

  transform(torrents: Torrent) {
    for (let key in torrents){
      console.log(torrents[key].magnet);
      this.sanitizer.bypassSecurityTrustResourceUrl(torrents[key].magnet);
      console.log("SANITIZED")
    }
    return torrents;
  }

}
