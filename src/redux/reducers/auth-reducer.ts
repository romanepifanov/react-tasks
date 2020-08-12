import { onSetOwnerId } from './navbar-reducer';
import { AuthState } from "../states/auth.state";
import { getStatusCall, loginCall, logoutCall } from '../../api/auth-service';
import { reset } from 'redux-form';

const SET_OWNER = "SET-OWNER";
const NEED_LOGIN = "NEED-LOGIN";
const LOGOUT = "LOGOUT";

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
        case LOGOUT:
            return {
                ...state,
                owner: null,
                isNeedLogin: true
            };
        default: return state;
    }
}
const onSetOwner = (owner: any) => ({ type: SET_OWNER, owner });
const onNeedLogin = (isNeedLogin: boolean) => ({ type: NEED_LOGIN, isNeedLogin });
const onLogout = () => ({ type: LOGOUT });

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
        dispatch(reset('postForm'));
        dispatch(onSetOwner(data.data));
        dispatch(onSetOwnerId(data.data.id));
    });
}

export const logout = (formaData: any) => (dispatch: any) => {
    logoutCall().then(data => {
        if (data.resultCode === 0) {
            dispatch(onLogout());
        }
    });
}

export default authReducer;