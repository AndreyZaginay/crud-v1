import { Observable } from 'rxjs/internal/Observable';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from '../entities/post';
import { POSTS_API } from '../tokens/posts.api';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private readonly http: HttpClient, @Inject(POSTS_API) private readonly api: string) { }

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.api)
  }
}
