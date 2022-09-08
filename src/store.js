import { legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const store = legacy_createStore(rootReducer, composeWithDevTools());

export default store;
