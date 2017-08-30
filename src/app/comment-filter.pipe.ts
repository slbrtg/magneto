import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commentFilter'
})
export class CommentFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
