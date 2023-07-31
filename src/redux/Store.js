import { createStore , applyMiddleware} from "redux";
// import cakeReducer from "./reducer/CakeReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from "./reducer/RootReducer";
import logger from "redux-logger";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))

export default store