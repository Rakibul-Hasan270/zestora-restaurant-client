import { FaCartFlatbed, FaDollarSign, FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MenuCard = ({ menu }) => {
    const { category, description, image, name, price, rating } = menu;

    return (
        <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img className="object-cover object-center w-full h-56 transition-transform duration-300 ease-in-out hover:scale-110" src={image} alt="avatar" />

            <div className="flex items-center px-6 py-3 bg-gray-900">
                <FaCartFlatbed></FaCartFlatbed>
                <h1 className="mx-3 text-lg font-semibold text-white">{category}</h1>
            </div>

            <div className="px-6 py-4">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {name}
                </h1>

                <p className="py-2 text-gray-700 dark:text-gray-400">
                    {description}
                </p>

                <div className="flex items-center justify-between gap-2.5">
                    <div>
                        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                            <FaDollarSign></FaDollarSign>
                            <h1 className="px-2 text-sm">Price : {price}</h1>
                        </div>

                        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                            <FaRegStar></FaRegStar>
                            <h1 className="px-2 text-sm">Rating : {rating}</h1>
                        </div>
                    </div>
                    <div className="flex justify-center mt-5">
                <Link to='/menu'>
                    <button className="cursor-pointer text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 mt-2.5">Details</button>
                </Link>
            </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;