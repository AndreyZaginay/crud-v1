import { filterByInputValue, selectCommentList, slectByGreatestId, sortByNameLength } from './state/comments.selectors';
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
comments$: Observable<Comment[]> = this.store.select(selectCommentList);
colums: string[] = ['id', 'name', 'email'];
currentRoute: string = 'comments';

  constructor(
    private readonly store: Store,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getCommentsActions())
  }

 slectByLessId(): void {
    this.comments$ = this.store.select(selectCommentList);
  }

 slectByGreatestId(): void {
    this.comments$ = this.store.select(slectByGreatestId);
  }

 sortByNameLength(): void {
    this.comments$ = this.store.select(sortByNameLength)
  }

 filterByInputValue(value: string): void {
    this.comments$ = this.store.select(filterByInputValue(value))
  }
}
