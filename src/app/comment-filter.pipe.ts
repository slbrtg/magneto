import { Pipe, PipeTransform } from '@angular/core';
import { Comment } from './comment.model';

@Pipe({
  name: 'commentFilter'
})
export class CommentFilterPipe implements PipeTransform {

  transform(input: Comment[], torrentId){
    let output: Comment[] = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i].torrentId === torrentId) {
        output.push(input[i]);
      }
    }
    return output;
  }

}
