import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../utils/api";
import Chart from "./Chart";
import { useGetSingleCoinQuery } from "../api/coins";

// const CoinDetailModal = ({openModal,closeModal}) => {
const CoinDetailModal = () => {
  // // if(!openModal) return null
  const { coinId } = useParams();
  const [coinDetail, setCoinDetail] = useState();
  const currency = "usd";

  // const getSingleCoin = async()=> {
  //     try {
  //         const response = await fetch(SingleCoin(coinId))
  //         if(!response.ok){
  //             throw Error('could not fetch data from server')
  //         }
  //         const data = response.json()
  //         setCoinDetail(data)
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }

  // useEffect(()=>{
  //     getSingleCoin()
  // },[coinId])

  // console.log(coinDetail);

  const { data } = useGetSingleCoinQuery(coinId);

  console.log("dataa =>", data);

  return (
    <div className="bg-gray-500 bg-opacity-75 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div className="w-[70%] h-[600px] bg-color-3 bg-opacity-25 flex justify-between">
        <div className="left">
          <div>
            <img src={coinDetail?.image} alt={coinDetail?.name} />
            <h3>{coinDetail?.name}</h3>
            <span>{coinDetail?.symbol}</span>
          </div>
          <div>
            <h3>price</h3>
            <span>{coinDetail?.current_price}</span>
          </div>
          <div>
            <span>
              {Number(
                coinDetail?.market_data?.price_change_percentage_24h
              ).toFixed(2)}
            </span>
          </div>
          <div>
            <h3>Market cap</h3>
            <span>
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: currency,
                maximumSignificiantDigits: 5,
              }).format(coinDetail?.market_data?.market_cap[currency])}
            </span>
          </div>
          <div>
            <h3>fully diluted valuation</h3>
            <span>
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: currency,
                notation: "compact",
              }).format(
                coinDetail?.market_data?.fully_diluted_valuation[currency]
              )}
            </span>
          </div>
          <div>
            <h3>total volume</h3>
            <span>
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: currency,
                maximumSignificiantDigits: 0,
              }).format(coinDetail?.market_data?.total_volume[currency])}
            </span>
          </div>
          <div>
            <h3>low 24h</h3>
            <span>
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: currency,
                maximumSignificiantDigits: 5,
              }).format(coinDetail?.market_data?.low_24h[currency])}
            </span>
          </div>
          <div>
            <h3>high 24h</h3>
            <span>
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: currency,
                maximumSignificiantDigits: 0,
              }).format(coinDetail?.market_data?.high_24h[currency])}
            </span>
          </div>
          <div>
            <h3>max supply</h3>
            <span>
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: currency,
                maximumSignificiantDigits: 0,
              }).format(coinDetail?.market_data?.max_supply)}
            </span>
          </div>
          <div>
            <h3>circualtin supply</h3>
            <span>
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: currency,
                maximumSignificiantDigits: 0,
              }).format(coinDetail?.market_data?.circulatiog_supply)}
            </span>
          </div>
          <div className="flex flex-col">
            <h3>links</h3>
            <a href={coinDetail?.links?.homepage}>
              {coinDetail?.links?.homepage.subString(0, 30)}
            </a>
            <a href={coinDetail?.links?.blockchain[0]}>
              {coinDetail?.links?.blockchain[0].subString(0, 30)}
            </a>
            {coinDetail?.links?.official_forum_url[0] && (
              <a href={coinDetail?.links?.official_forum_url}>
                {coinDetail?.links?.official_forum_url.subString(0, 30)}
              </a>
            )}
          </div>
          <div>
            <h3>sentiment</h3>
            <div className="p-2 bg-green-300">
              <span>
                {Number(coinDetail?.sentiment_votes_up_percentage).toFixed(2)}
              </span>
            </div>
            <div className="p-2 bg-red-300">
              <span>
                {Number(coinDetail?.sentiment_votes_down_percentage).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
        <div className="right">
          <ul>
            <Chart />
            <div>market cap rank : {coinDetail?.market_cap_rank}</div>
            <div>coingecko rank: {coinDetail?.coingecko_rank}</div>
            <li>coingecko score: {coinDetail?.coingecko_score}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default CoinDetailModal;
