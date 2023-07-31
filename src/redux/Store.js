import { createStore } from "redux";
// import cakeReducer from "./reducer/CakeReducer";
import { rootReducer } from "./reducer/RootReducer";

const store = createStore(rootReducer)

export default store