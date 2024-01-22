import { useSelector } from "react-redux";
import { useGetAllCoinsQuery } from "../api/coins";
import CoinsTable from "../components/Coinstable";
import { useCryptoContext } from "../context/crypto";

const Coins = () => {
  //   const { all_coins } = useCryptoContext();
  const currency = useSelector((state) => state.app.currency);
  const sortType = useSelector((state) => state.app.sortType);

  const { data } = useGetAllCoinsQuery(currency, sortType);

  console.log("data =", data);
  return (
    <div className="w-[90%] max-h-[670px] md:w-[80%] mx-auto flex flex-col">
      <CoinsTable coins={data} />
    </div>
  );
};

export default Coins;
