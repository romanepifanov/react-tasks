import { AuthState } from "../states/auth.state";

const CHECK_AUTH = "CHECK-AUTH";

let initialState: AuthState = {
    owner: null
}

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CHECK_AUTH:
            return state;
        default: return state;
    }
}
export const onCheckAuth = () => ({ type: CHECK_AUTH });

export default authReducer;