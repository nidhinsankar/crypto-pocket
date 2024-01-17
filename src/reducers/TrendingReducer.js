import { ADD_ALL_TRENDING_COINS } from "../utils/constants";


export const trendingReducer = (state,action) => {

    switch (action.type) {
        case ADD_ALL_TRENDING_COINS:
            return {
                ...state,
                trendingCoins:[...action.payload]
            }
    
        default:
            return state
    }
}