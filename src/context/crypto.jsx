import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { CoinList, SingleCoin } from "../utils/api";
import { CryptoReducer } from "../reducers/CryptoReducer";
import { ADD_ALL_COINS } from "../utils/constants";


export const cryptoContext = createContext(null)

const initialState = {
    all_coins:['hello'],
    single_coin:['oomnu']
}

export const CryptoProvider = ({children}) => {

    const [allCoins,setAllCoins] = useState([])
    const [currency,setCurrency] = useState('usd')
    const [singleCoin,setSingleCoin] = useState()
    const [state,dispatch] = useReducer(CryptoReducer,initialState)

    const fetchAllCoins = async() =>{
        try {
            const response = await fetch(CoinList(currency))
            if(!response.ok){
                throw Error('could not fetch data from server')
            }
            let data =await response.json();
            setAllCoins(data)
            dispatch({type:ADD_ALL_COINS,payload:data})
        } catch (error) {
            console.log(error);
        }
    }

    // console.log(allCoins);
    useEffect(()=>{
        fetchAllCoins()
    },[])

    const fetchSingleCoin = async(coinId)=> {
        try {
            const response = await fetch(SingleCoin(coinId))
            if (!response.ok) {
                throw Error('could not fetch data from server')
            }
            let data = response.json()
            setSingleCoin(data)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <cryptoContext.Provider value={{
            all_coins:state?.all_coins,
            single_coin:state?.single_coin
        }}>
            {children}
        </cryptoContext.Provider>
    )
}

export const useCryptoContext = () => {
    return useContext(cryptoContext)
}