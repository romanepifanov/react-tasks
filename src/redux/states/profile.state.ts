import { Profile } from './../../models/profile.model';

export interface ProfileState {
    posts: Array<any>,
    profile: Profile | null,
    status: string
}