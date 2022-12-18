import { selectCommentList } from './state/comments.selectors';
import { getCommentsActions } from './state/comments.actions';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Comment } from './entities/comment';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit{
comments$: Observable<Comment[]> = this.store.select(selectCommentList)

  constructor(
    private readonly store: Store,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getCommentsActions())
  }

  public fullInfo(commentId: number): void {
    this.router.navigate([`comments/${commentId}`])
  }

}
