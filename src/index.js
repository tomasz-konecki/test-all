import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store";
import { albumReleased } from "./actions/albumsActions";

store.dispatch(albumReleased("Please"));

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
