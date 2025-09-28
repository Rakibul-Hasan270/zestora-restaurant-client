import { FiSearch } from "react-icons/fi";
import 'swiper/css';
import 'swiper/css/navigation';
import Marquee from "react-fast-marquee";
import useMenu from "../../hooks/useMenu";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import MenuCard from "../../components/MenuCard/MenuCard";
import { IoIosArrowDown, IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const Menu = () => {
    const [, isLoading] = useMenu();
    const axiosPublic = useAxiosPublic();

    const [count, setCount] = useState(0);
    const [itemPerPage,] = useState(6);
    const [currentPage, setCurrentPage] = useState();

    const numberOfPages = Math.ceil(count / itemPerPage);
    const pages = [...Array(numberOfPages).keys()].map(e => e + 1);

    useEffect(() => {
        axiosPublic.get('/menuCount')
            .then(data => {
                setCount(data.data.result);
            })
    }, [axiosPublic])

    const { data: menu = [] } = useQuery({
        queryKey: ['count', currentPage, itemPerPage],
        queryFn: async () => {
            const result = await axiosPublic.get(`/all-menu?page=${currentPage}&size=${itemPerPage}`);
            return result.data;
        }
    })

    const handelPaginationBnt = value => {
        setCurrentPage(value);
    }

    if (isLoading) return <p className="text-center text-2xl font-serif text-cyan-500 mt-16 mb-10">Loading...</p>
    return (
        <div className="max-w-6xl mx-auto md:mt-12">
            <div>
                <div className="text-center">
                    <p className="flex items-center justify-center gap-2 md:w-xl mb-3 mx-auto font-bold text-cyan-500"><FiSearch></FiSearch>Find your favourte Food.</p>
                    <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                        Search, Order & <br /> Find Your
                        <span className="text-transparent ml-4 bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600">
                            Fav Food
                        </span>
                    </h1>
                    <p className="text-lg font-normal text-gray-500 lg:text-xl md:w-10/12 mx-auto mt-6 dark:text-gray-400">
                        Delight in handcrafted burgers, artisan pizzas, fresh salads, and decadent desserts. Enjoy signature pastas, chef’s specials, and refreshing beverages, all made with quality and creativity.
                    </p>
                </div>
                <div className="md:w-5/6 mx-auto my-12 flex gap-7 mb-28">
                    <Marquee>
                        {
                            menu.map(menu => <button key={menu._id} className="border rounded-2xl py-2 px-6 font-semibold cursor-pointer border-cyan-500 mr-8">{menu.category}</button>)
                        }
                    </Marquee>
                </div>
            </div>

            <SectionHeading heading='Our Delicious Menu' subHeading='Explore a variety of freshly prepared dishes made with love and quality ingredients. From starters to desserts, every bite brings you the perfect taste of happiness.'></SectionHeading>

            <div className=' flex justify-around items-center mb-10'>
                <div>
                    <details className="dropdown">
                        <summary className="btn m-1"><span className='flex items-center gap-1.5'>Filter By Category <IoIosArrowDown></IoIosArrowDown></span></summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </details>
                </div>

                <form className="mx-auto md:w-1/2">
                    <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                        Search
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Mockups, Logos..."
                            required
                        />
                        <button
                            type="submit"
                            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Search
                        </button>
                    </div>
                </form>


                <div>
                    <button className="btn ">Reset</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                {
                    menu.map(menu => <MenuCard key={menu._id} menu={menu}></MenuCard>)
                }
            </div>

            <div className='flex justify-center my-12'>
                <div className="flex">
                    {/* Previous Button */}
                    <button onClick={() => handelPaginationBnt(currentPage - 1)} disabled={currentPage === 1} className='btn btn-outline'>
                        <IoIosArrowRoundBack></IoIosArrowRoundBack>    Prev
                    </button>

                    {/* Page Number  */}
                    {
                        pages.map((page) =>
                            <button key={page} onClick={() => handelPaginationBnt(page)}
                                className={`items-center ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 hover:text-white'} hidden px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md sm:flex `}>{page}
                            </button>)
                    }

                    {/* Next Button */}
                    <button onClick={() => handelPaginationBnt(currentPage + 1)} disabled={currentPage === numberOfPages} className='btn btn-outline'>
                        Next<IoIosArrowRoundForward ></IoIosArrowRoundForward >
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Menu;