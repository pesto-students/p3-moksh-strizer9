import rootReducers from "./reducers";
import { legacy_createStore as createStore } from "redux";

const store = createStore(rootReducers);
export default store;
