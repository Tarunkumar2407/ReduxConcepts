import { createStore } from "redux";
import cakeReducer from "./reducer/CakeReducer";


export const store = createStore(cakeReducer)