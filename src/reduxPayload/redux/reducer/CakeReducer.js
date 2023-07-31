import { BUY_CAKE } from "../action/CakeType"



const initialState = {
    NumberOfCakes : 20
}
const cakeReducer = (state=initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: 
           return {
            ...state, 
            NumberOfCakes: state.NumberOfCakes - action.payload
        }
        default: return state
    }
}
export default cakeReducer