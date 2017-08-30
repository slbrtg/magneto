import { Injectable } from '@angular/core';
import { Comment } from './comment.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommentService {
  allComments: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.allComments = database.list('comments');
  }

  getAllComments(){
    return this.allComments;
  }

}
