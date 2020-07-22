import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import navbarReducer from "./reducers/navbar-reducer";
import searchReducer from "./reducers/search-reducer";
import { createStore, combineReducers } from "redux";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbarPage: navbarReducer,
    searchPage: searchReducer,
});

let store = createStore(reducers)

export default store;