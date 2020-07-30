import { AuthState } from "../states/auth.state";

const SET_OWNER = "SET-OWNER";
const NEED_LOGIN = "NEED-LOGIN";

let initialState: AuthState = {
    owner: null,
    isNeedLogin: false
}

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_OWNER:
            return {
                ...state,
                owner: action.owner,
                isNeedLogin: false
            };
        case NEED_LOGIN:
            return {
                ...state,
                isNeedLogin: action.isNeedLogin
            };
        default: return state;
    }
}
export const onSetOwner = (owner: any) => ({ type: SET_OWNER, owner });
export const onNeedLogin = (isNeedLogin: boolean) => ({ type: NEED_LOGIN, isNeedLogin });

export default authReducer;