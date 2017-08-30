import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { Comment } from '../comment.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
  providers: [CommentService]
})
export class AddCommentComponent implements OnInit {
  torrentId: string;

  constructor(private commentService: CommentService, private location: Location,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.torrentId = urlParameters['id'];
    });
  }

  addComment(comment: string, handle: string){
    console.log("Torrent ID from Component" + this.torrentId);
    let newComment: Comment = new Comment(handle, comment, this.torrentId);
    this.commentService.addComment(newComment);
  }

}
