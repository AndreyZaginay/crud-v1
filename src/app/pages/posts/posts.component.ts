import { selectPostsList, selectPostListByGreatestId, filterByOddId, filterByEvenId, sortByTitleLength, filterByInputValue } from './state/posts.selectors';
import { getPostsActions } from './state/posts.actions';
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
colums: string[] = ['id', 'title'];
routeList: string = 'posts'

  constructor(
    private readonly store: Store,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getPostsActions())
  }

  public slectByGreatestId(): void {
    this.posts$ = this.store.select(selectPostListByGreatestId)
  }

  public slectByLessId(): void {
    this.posts$ = this.store.select(selectPostsList);
  }

  public filterByOddId(): void {
    this.posts$ = this.store.select(filterByOddId)
  }

  public filterByEvenId(): void {
    this.posts$ = this.store.select(filterByEvenId)
  }

  public sortByTitleLength(): void {
    this.posts$ = this.store.select(sortByTitleLength)
  }

  public filterByInputValue(value: string) {
    this.posts$ = this.store.select(filterByInputValue(value))
  }
}
