import { CommentsState } from 'src/app/pages/dashboard/comments/state/comments-state.interface';
import { UsersState } from 'src/app/pages/dashboard/users/state/users-state.interface';
import { PostsState } from '../../../pages/dashboard/posts/state/posts-state.interface'
import { AuthState } from "./auth";

export interface AppState {
    posts: PostsState;
    users: UsersState;
    comments: CommentsState;

    auth: AuthState
}
