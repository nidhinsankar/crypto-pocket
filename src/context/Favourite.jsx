import { createContext, useContext, useReducer } from "react";
import { favouritesReducer } from "../reducers/FavouriteReducer";


export const favouriteContext = createContext(null)

const initialState = {
    favouriteCoins:[]
}
export const FavouriteProvider = ({children}) =>{

    const [state,dispatch] = useReducer(favouritesReducer,initialState)

    return (
        <favouriteContext.Provider value={{
            favouriteCoins:state.favouriteCoins
        }}>
            {children}
        </favouriteContext.Provider>
    )
}

export const usefavouriteCotext = () => {
    return useContext(favouriteContext)
}