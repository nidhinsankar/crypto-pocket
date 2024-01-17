import CoinsTable from "../components/Coinstable"
import { usefavouriteCotext } from "../context/Favourite"


const Favourites = () =>{

    const {favouritesCoins} = usefavouriteCotext()

    return (
        <div className="w-[90%] max-h-[670px] overflow-y-auto md:w-[80%] mx-auto flex flex-col">
            <CoinsTable coins={favouritesCoins} />
        </div>
    )
}

export default Favourites