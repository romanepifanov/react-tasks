import { Profile } from './../../models/profile.model';

export interface ProfileState {
    postForm: any,
    posts: Array<any>,
    profile: Profile | null,
    status: string
}