import { ADD_FAVOURITE_COIN } from "../utils/constants";


export const favouritesReducer = (state,action) => {

    switch (action.type) {
        case ADD_FAVOURITE_COIN:
            return {
                ...state,
                favouriteCoins:[...state.favouriteCoins,action.payload]
            }
        
        default:
            return state;
    }
}