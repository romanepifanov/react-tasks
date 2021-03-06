import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import navbarReducer from "./reducers/navbar-reducer";
import searchReducer from "./reducers/search-reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./reducers/auth-reducer";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbarPage: navbarReducer,
    searchPage: searchReducer,
    authState: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;