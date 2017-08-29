import { Pipe, PipeTransform } from '@angular/core';
import { Torrent } from './torrent.model';



@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(input: Torrent[]) {
    var output: Torrent[] = [];
    for (var i = 0; i <input.length; i++) {
      if (input[i].name === "") {
        output.push(input[i]);
      }
    }
    return output;
  }
}
