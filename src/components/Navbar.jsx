import { Link } from "react-router-dom"


const Navbar = () => {

    return (
        <div className="w-[90%] md:w-[80%] mx-auto ">
            <nav className=" flex justify-between items-center mx-auto w-full md:w-[50%] border-4 rounded-md py-1 px-2 border-color-2 my-2">
                <Link to={'/'} className="bg-color-1 p-1 hover:bg-color-4 rounded-lg w-[30%] text-center">All Coins</Link>
                <Link to={'/trending'} className="bg-color-1 p-1 hover:bg-color-4 rounded-lg w-[30%] text-center">Trending</Link>
                <Link to={'/favourites'} className="bg-color-1 p-1 hover:bg-color-4 rounded-lg w-[30%] text-center">Favourites</Link>
            </nav>
        </div>
    )
}

export default Navbar