import { buyIceCream } from "../action/IceCreamAction";
import { BUY_ICECREAM } from "../action/IceCreamType";

const initialState = {
    numOfIceCream : 40
}
export const iceCreamReducer = (state= initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1
            }
        default :
            return state
    }
}