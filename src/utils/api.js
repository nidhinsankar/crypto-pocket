export const CoinList = (currency, sortOrder) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${sortOrder}&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`;

export const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const HistoricalChartData = (currency, id, days = 365) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const TrendingCoin = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

export const searchCoin = (query) =>
  `https://api.coingecko.com/api/v3/search?query=${query}`;
