import { useEffect, useState } from "react";
import enterIcon from "../assets/enter-icon.png";
import { SORT_COINS, SUPPORTED_CURRENCIES } from "../utils/constants";
import { useSearchCoinQuery } from "../api/coins";
import { searchCoin } from "../utils/api";
import { useDispatch } from "react-redux";
import { addCurrency, addSortType } from "../store/appSlice";

const OptionBar = () => {
  const [coinName, setCoinName] = useState("");
  const dispatch = useDispatch();

  const handleCurrencyChange = (e) => {
    e.preventDefault();
    dispatch(addCurrency(e.target.value));
  };

  const handleSortChange = (e) => {
    e.preventDefault();
    dispatch(addSortType(e.target.value));
  };

  // const { data, isLoading } = useSearchCoinQuery(coinName);

  const fetchSearchCoins = async () => {
    const res = await fetch(searchCoin(coinName));
    const data = await res.json();

    console.log(data);
  };

  useEffect(() => {
    fetchSearchCoins();
  }, [coinName]);

  // console.log("search =>", data);
  return (
    <section className="border border-color-2 flex justify-between  mb-2">
      <div className="flex items-center">
        <input
          type="text"
          name="coin-name"
          id="coin-name"
          placeholder="search coin..."
          onChange={(e) => setCoinName(e.target.value)}
        />
      </div>
      <div className="flex items-center">
        <label htmlFor="currency" className="">
          currency
          <select
            name="currency"
            id="currency"
            onChange={(e) => handleCurrencyChange(e)}
          >
            {SUPPORTED_CURRENCIES?.map((curr) => (
              <option value={curr}>{curr}</option>
            ))}
          </select>
          {/* <input
            type="text"
            name="currency"
            id="currency"
            onChange={(e) => setCurrency(e.target.value)}
          /> */}
        </label>
        <button>
          <img src={enterIcon} className="w-5 " alt="enter" />
        </button>
      </div>

      <div>
        <label htmlFor="sort-icons">
          sort by:
          <select
            name="sort-coins"
            id="sort-icons"
            onChange={(e) => handleSortChange(e)}
          >
            {SORT_COINS?.map((sort) => (
              <option value={sort?.value}>{sort?.label}</option>
            ))}
          </select>
        </label>
      </div>
    </section>
  );
};

export default OptionBar;
