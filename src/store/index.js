import { createStore } from "redux";
import { albumsReducer } from "./../reducers/albumsReducer";

let store = createStore(albumsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
