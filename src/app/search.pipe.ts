import { Pipe, PipeTransform } from '@angular/core';
import { Torrent } from './torrent.model';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(torrents: any[], input: any): any {
    if (input === undefined) return torrents;
    return torrents.filter(function(torrent) {
      return torrent.name.toLowerCase().includes(input.toLowerCase()) || torrent.category.toLowerCase().includes(input.toLowerCase()) || torrent.description.toLowerCase().includes(input.toLowerCase());
    })
  }
}
