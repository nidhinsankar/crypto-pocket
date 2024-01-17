import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";


const Home = () => {

   

    return (
        <div>
            <Header />
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Home