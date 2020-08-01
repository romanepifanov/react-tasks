import { User } from "../../models/user.model";

export interface SearchState {
    users: Array<User>,
    haveMore: boolean,
    followingInProgress: boolean
}