import { combineReducers } from "redux";
import cakeReducer from "./CakeReducer";
import { iceCreamReducer } from "./IceCreamReducer";

export const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream: iceCreamReducer
})