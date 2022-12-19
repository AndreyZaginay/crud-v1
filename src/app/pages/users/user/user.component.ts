import { getUsersActions } from './../state/users.actions';
import { getPostsActions } from './../../posts/state/posts.actions';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../entities/user';
import { switchMap, tap } from 'rxjs';
import { selectUser, selectUserPostList } from '../state/users.selectors';
import { Post } from '../../posts/entities/post';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user$!: Observable<User>;
  posts$!: Observable<Post[]>;

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.user$ = this.route.params.pipe(
      switchMap(params => this.store.select(selectUser(+params['id']))),
      tap(params => this.getUserPosts(+params['id']))
    )
  }

  private getUserPosts(userId: number): void {
    this.store.dispatch(getPostsActions())
    this.posts$ = this.store.select(selectUserPostList(userId))
  }

  public postInfo(postId: number): void {
    this.router.navigate(['posts', `${postId}`])
  }

  public toUsers(): void {
    this.router.navigate(['users'])
  }

}
