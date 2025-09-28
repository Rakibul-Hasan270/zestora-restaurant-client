import { FiSearch } from "react-icons/fi";
import 'swiper/css';
import 'swiper/css/navigation';
import Marquee from "react-fast-marquee";


const Menu = () => {
    return (
        <div className="max-w-6xl mx-auto md:mt-12">
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
            <div className="md:w-5/6 mx-auto my-12">
                <Marquee>
                    <button className="border rounded-2xl py-2 px-6 font-semibold cursor-pointer border-cyan-500 mr-8">Deesert</button>
                    <button className="border rounded-2xl py-2 px-6 font-semibold cursor-pointer border-cyan-500 mr-8">Deesert</button>
                    <button className="border rounded-2xl py-2 px-6 font-semibold cursor-pointer border-cyan-500 mr-8">Deesert</button>
                    <button className="border rounded-2xl py-2 px-6 font-semibold cursor-pointer border-cyan-500 mr-8">Deesert</button>
                    <button className="border rounded-2xl py-2 px-6 font-semibold cursor-pointer border-cyan-500 mr-8">Deesert</button>
                    <button className="border rounded-2xl py-2 px-6 font-semibold cursor-pointer border-cyan-500 mr-8">Deesert</button>
                    <button className="border rounded-2xl py-2 px-6 font-semibold cursor-pointer border-cyan-500 mr-8">Deesert</button>
                    <button className="border rounded-2xl py-2 px-6 font-semibold cursor-pointer border-cyan-500 mr-8">Deesert</button>
                </Marquee>
            </div>
        </div>
    );
};

export default Menu;