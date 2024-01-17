import { ADD_ALL_COINS, ADD_SINGLE_COIN } from "../utils/constants";


export const CryptoReducer = (state,action) => {

    switch (action.type) {
        case ADD_ALL_COINS:
            return {
                ...state,
                all_coins:[...action.payload]
            }
        
        case ADD_SINGLE_COIN:
            return {
                ...state,
                single_coin:action.payload
            }
        default:
            return state
    }
} 