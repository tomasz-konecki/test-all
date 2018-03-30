import { createStore } from "redux";
import { projectsReducer } from "./../reducers/projectsReducer";

let store = createStore(projectsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
