import { useState } from "react";
import { useGetTrendingCoinQuery } from "../api/coins";
import { useTrendingContext } from "../context/TrendingCoins";
import { useCryptoContext } from "../context/crypto";

const Trending = () => {
  // const { trendingCoins } = useTrendingContext()

  // console.log(trendingCoins);
  const [trendingCoins, setTrendingCoins] = useState([]);
  const { data, isLoading } = useGetTrendingCoinQuery("usd");

  console.log("dataa =>", data);

  return (
    <div className="w-[90%] md:w-[80%] mt-4 bg-slate-600 mx-auto h-[500px] md:h-[800px] lg:h-[670px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center overflow-y-auto">
      {trendingCoins?.map((coin) => (
        <div className="bg-color-5 w- lg:w-[70%] flex mx-4 my-2 rounded-md p-3">
          <div className="w-[70%]">
            <h3>
              <span>Name: </span>
              <span>{coin?.name}</span>
            </h3>
            <p>
              <span>current Price: </span>
              {coin?.current_price}
            </p>
            <p>
              <span>Syambol: </span>
              {coin?.symbol}
            </p>
            <p>
              <span>market-cap: </span>
              {coin?.market_cap}
            </p>
            <p>
              <span>rank:</span>
              {coin?.market_cap_rank}
            </p>
            <p>
              <span>max-supply:</span>
              {coin?.max_supply}
            </p>
          </div>
          <img
            src={coin?.image}
            className="max-w-[30%] h-[60%] rounded-full m-auto"
            alt={coin?.name}
          />
        </div>
      ))}
    </div>
  );
};

export default Trending;
