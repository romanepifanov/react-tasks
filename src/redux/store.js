import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import navbarReducer from "./reducers/navbar-reducer";
import searchReducer from "./reducers/search-reducer";
import { createStore, combineReducers } from "redux";
import authReducer from "./reducers/auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbarPage: navbarReducer,
    searchPage: searchReducer,
    authState: authReducer,
});

let store = createStore(reducers)

export default store;