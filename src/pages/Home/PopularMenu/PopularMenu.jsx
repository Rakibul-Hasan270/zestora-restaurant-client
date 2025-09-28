import { useEffect, useState } from "react";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import { Link } from "react-router-dom";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularMenu = data.filter(data => data.category === 'PopularMenu')
                setMenu(popularMenu);
            })
    }, [])

    return (
        <div className="md:mt-28">
            <SectionHeading heading='Our Popular Menu' subHeading='Handpicked favorites loved by our customers – fresh, delicious, and unforgettable.'></SectionHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {
                    menu.map((menu, idx) =>
                        <Link to='/menu' key={idx} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img
                                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                                src={menu.image}
                                alt="blog"
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {menu.name}
                                </h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {menu.description}
                                </p>
                            </div>
                        </Link>
                    )
                }
            </div>
            <div className="flex justify-center mt-5">
                <Link to='/menu'>
                    <button className="cursor-pointer text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 mt-2.5">See More</button>
                </Link>
            </div>
        </div>
    );
};

export default PopularMenu;