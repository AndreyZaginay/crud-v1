import { UsersState } from 'src/app/pages/users/state/users-state.interface';
import { PostsState } from '../../pages/posts/state/posts-state.interface'

export interface AppState {
    posts: PostsState;
    users: UsersState;
    // comments: CommentsState;
}