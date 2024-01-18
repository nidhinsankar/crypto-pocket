import { useState } from "react";
import enterIcon from "../assets/enter-icon.png";
import { SORT_COINS } from "../utils/constants";

const OptionBar = () => {
  const [coinName, setCoinName] = useState("");
  const [currency, setCurrency] = useState("");
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
          <input
            type="text"
            name="currency"
            id="currency"
            onChange={(e) => setCurrency(e.target.value)}
          />
        </label>
        <button>
          <img src={enterIcon} className="w-5 " alt="enter" />
        </button>
      </div>

      <div>
        <label htmlFor="sort-icons">
          sort by:
          <select name="sort-coins" id="sort-icons">
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
