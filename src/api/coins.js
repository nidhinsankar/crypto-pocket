import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coinsApi = createApi({
  reducerPath: "coinsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.coingecko.com/api/v3/` }),
  endpoints: (builder) => ({
    getAllCoins: builder.query({
      query: (currency) =>
        `coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`,
    }),
    getSingleCoin: builder.query({
      query: (id) => `coins/${id}`,
    }),
    getHistoricalChartData: builder.query({
      query: (id, currency, days) =>
        `coins/${id}/market_chart?vs_currency=${currency}&days=${days}`,
    }),
    getTrendingCoin: builder.query({
      query: (currency) =>
        `coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`,
    }),
    SearchCoin: builder.query({
      query: (query) => `search?query=${query}`,
    }),
  }),
});

export const {
  useGetAllCoinsQuery,
  useGetSingleCoinQuery,
  useGetHistoricalChartDataQuery,
  useGetTrendingCoinQuery,
  useSearchCoinQuery,
} = coinsApi;
