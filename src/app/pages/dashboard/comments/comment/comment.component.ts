import { Observable, switchMap, tap } from 'rxjs';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Comment } from '../entities/comment';
import { getPostsActions } from '../../posts/state/posts.actions';
import { Post } from '../../posts/entities/post';
import { selectComment } from '../state/comments.selectors';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  comment$!: Observable<Comment>;
  post$!: Observable<Post>

    constructor(
      private readonly route: ActivatedRoute,
      private readonly router: Router,
      private readonly store: Store
    ) {}

    ngOnInit(): void {
      this.comment$ = this.route.params.pipe(
        tap(() => this.store.dispatch(getPostsActions())),
        switchMap(params => this.store.select(selectComment(+params['id']))),
      )
    }

    postInfo(postId: number): void {
      this.router.navigate(['dashboard', 'posts', `${postId}`])
    }

    toComments(): void {
      this.router.navigate(['comments'])
    }
}
