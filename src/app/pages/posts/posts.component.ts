import { selectPostsList } from './state/posts.selectors';
import { getPostsActions } from './state/posts.actions';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Post } from './entities/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts$: Observable<Post[]> = this.store.select(selectPostsList);

  constructor(
    private readonly store: Store,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getPostsActions())
  }

  public fullInfo(postId: number): void {
    this.router.navigate([`posts/${ postId }`])
  }
}
