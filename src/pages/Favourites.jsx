import { useSelector } from "react-redux";
import CoinsTable from "../components/Coinstable";
import { usefavouriteCotext } from "../context/Favourite";

const Favourites = () => {
  // const {favouritesCoins} = usefavouriteCotext()
  const favouriteCoins = useSelector((state) => state.Favourites.coins);
  console.log(favouriteCoins);
  return (
    <div className="w-[90%] max-h-[670px] overflow-y-auto md:w-[80%] mx-auto flex flex-col">
      <CoinsTable coins={favouriteCoins} />
    </div>
  );
};

export default Favourites;
