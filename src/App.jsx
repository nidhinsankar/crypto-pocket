import { FavouriteProvider } from "./context/Favourite";
import { TrendingProvider } from "./context/TrendingCoins";
import { CryptoProvider } from "./context/crypto";
import Home from "./pages/Home";

function App() {
  return (
    <div className="w-screen h-screen  bg-color-5">
      <Home />
    </div>
  );
}

export default App;

// function App() {

//   return (
//     <CryptoProvider>
//       <TrendingProvider>
//           <FavouriteProvider>
//             <div className="w-screen h-screen  bg-color-5">
//               <Home />
//             </div>
//           </FavouriteProvider>
//       </TrendingProvider>
//     </CryptoProvider>
//   )
// }
