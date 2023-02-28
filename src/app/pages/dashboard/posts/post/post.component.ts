import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { switchMap, tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

import { Post } from '../entities/post';
import { getCommentsActions } from '../../comments/state/comments.actions';
import { selectPost, selectPostComments } from '../state/posts.selectors';
import { Comment } from '../../comments/entities/comment';
import { getUsersActions } from '../../users/state/users.actions';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
post$!: Observable<Post>;
comments$!: Observable<Comment[]>
colums: string[] = ['id', 'name', 'email'];
currentRoute: string = 'comments';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly store: Store
  ) {}

  ngOnInit(): void {
    this.post$ = this.route.params.pipe(
      switchMap(params => this.store.select(selectPost(+params['id']))),
      tap(params => this.getPostComments(+params['id']))
    )
    this.store.dispatch(getUsersActions());
  }

  private getPostComments(postId: number): void {
    this.store.dispatch(getCommentsActions());
    this.comments$ = this.store.select(selectPostComments(postId))
  }

  toPosts(): void {
    this.router.navigate(['posts'])
  }

  toUser(userId: number): void {
    this.router.navigate([`dashboard/users/${userId}`])
  }
}
