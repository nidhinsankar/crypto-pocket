import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Coins from "./pages/Coins.jsx";
import Trending from "./pages/Trending.jsx";
import Favourites from "./pages/Favourites.jsx";
import CoinDetailModal from "./components/CoinDetailModal.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Coins />,
      },
      {
        path: "/trending",
        element: <Trending />,
      },
      {
        path: "/favourites",
        element: <Favourites />,
      },
      {
        path: "/:coinId",
        element: <CoinDetailModal />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
