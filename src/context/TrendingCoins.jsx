import { createContext, useContext, useEffect, useReducer } from "react";
import { trendingReducer } from "../reducers/TrendingReducer";
import { TrendingCoin } from "../utils/api";
import { ADD_ALL_TRENDING_COINS } from "../utils/constants";


export const trendingContext = createContext()

const initialState = {
    trendingCoins:['hello']
}

export const TrendingProvider = ({children}) => {

    const [state,dispatch] = useReducer(trendingReducer,initialState)


    const fetchTrendingCoins = async() => {

        try {
            const response = await fetch(TrendingCoin('usd'))
            if (!response.ok) {
                throw Error('unable to fetch data from api')
            }
            const data = await response.json()
            dispatch({type:ADD_ALL_TRENDING_COINS,payload:data})
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchTrendingCoins()
    },[])


    return (
        <trendingContext.Provider value={{
            trendingCoins:state.trendingCoins
        }}>
            {children}
        </trendingContext.Provider>
    )
}


export const useTrendingContext = () => {
    return useContext(trendingContext)
}