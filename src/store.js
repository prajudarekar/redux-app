import rootReducer from "./Reducer/Index";
import { createStore } from "redux";

const store = createStore(rootReducer);
export default store;
