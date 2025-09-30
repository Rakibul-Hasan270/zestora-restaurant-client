import AboutUs from "../AboutUs/AboutUs";
import Carousel from "../Banner/Carousel";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>

            <div className="max-w-6xl mx-auto">
                <PopularMenu></PopularMenu>
            </div>
            <Featured></Featured>
            <div className="max-w-7xl mx-auto">
                <AboutUs></AboutUs>
                <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default Home;