import { User } from "../../models/user.model";

export interface SearchState {
    users: Array<User>,
    needMore: boolean,
    haveMore: boolean
}