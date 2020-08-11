import { onSetOwnerId } from './navbar-reducer';
import { AuthState } from "../states/auth.state";
import { getStatusCall, loginCall } from '../../api/auth-service';
import { reset } from 'redux-form';

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
const onSetOwner = (owner: any) => ({ type: SET_OWNER, owner });
const onNeedLogin = (isNeedLogin: boolean) => ({ type: NEED_LOGIN, isNeedLogin });

export const setOwner = () => (dispatch: any) => {
    getStatusCall().then(data => {
        if (data.messages[0] === "You are not authorized") {
            dispatch(onNeedLogin(true));
        } else {
            dispatch(onSetOwner(data.data));
            dispatch(onSetOwnerId(data.data.id));
        }
    });
}

export const login = (formaData: any) => (dispatch: any) => {
    loginCall(formaData).then(data => {
        debugger
        dispatch(reset('postForm'));
    });
}

export default authReducer;