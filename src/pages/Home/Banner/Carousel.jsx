import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Slider from './Slider';
import banner1 from '../../../assets/banner/banner1.jpg'
import banner2 from '../../../assets/banner/banner2.jpg'
import banner3 from '../../../assets/banner/banner3.jpg'
import banner4 from '../../../assets/banner/banner4.jpg'


const Carousel = () => {

    const bannerData = [
        {
            title: "Fresh & Juicy Burgers – Satisfy Your Cravings Now!",
            imageUrl: banner1,
            buttonText: ["View Menu", "Order Now"]
        },
        {
            title: "From Biryani to Pasta – All Flavors in One Place!",
            imageUrl: banner2,
            buttonText: ["Explore Dishes", "Book a Table"]
        },
        {
            title: "Your City’s Best Restaurants – Just One Click Away!",
            imageUrl: banner3,
            buttonText: ["Search Nearby", "Get Started"]
        },
        {
            title: "Real Chefs. Real Taste. Trusted Locally.",
            imageUrl: banner4,
            buttonText: ["View Restaurants", "Join as Partner"]
        },
        {
            title: "Don’t Stress It — Pizza, Pasta, Paratha... All Here!",
            imageUrl: "https://i.postimg.cc/nr0xHrtj/pexels-marty-shih-2147889088-31893699.jpg",
            buttonText: ["Order Food", "Reserve Table"]
        }
    ];

    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className=""
            >
                {
                    bannerData.map((info, idx) => <SwiperSlide key={idx}><Slider info={info}></Slider></SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Carousel;