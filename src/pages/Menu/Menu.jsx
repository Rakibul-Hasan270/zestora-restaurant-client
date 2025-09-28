import { FiSearch } from "react-icons/fi";
import 'swiper/css';
import 'swiper/css/navigation';
import Marquee from "react-fast-marquee";
import useMenu from "../../hooks/useMenu";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import MenuCard from "../../components/MenuCard/MenuCard";


const Menu = () => {
    const [menu, isLoading, refetch] = useMenu();


    if (isLoading) return <p className="text-center text-2xl font-serif text-cyan-500 mt-16">Loading...</p>
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
                <div className="md:w-5/6 mx-auto my-12 flex gap-7 mb-20">
                    <Marquee>
                        {
                            menu.map(menu => <button key={menu._id} className="border rounded-2xl py-2 px-6 font-semibold cursor-pointer border-cyan-500 mr-8">{menu.category}</button>)
                        }
                    </Marquee>
                </div>
            </div>

            <SectionHeading heading='Our Delicious Menu' subHeading='Explore a variety of freshly prepared dishes made with love and quality ingredients. From starters to desserts, every bite brings you the perfect taste of happiness.'></SectionHeading>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                {
                    menu.map(menu => <MenuCard key={menu._id} menu={menu}></MenuCard>)
                }
            </div>
        </div>
    );
};

export default Menu;