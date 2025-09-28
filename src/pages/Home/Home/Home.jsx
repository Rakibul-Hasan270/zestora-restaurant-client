import Carousel from "../Banner/Carousel";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>

            <div className="max-w-6xl mx-auto">
                <PopularMenu></PopularMenu>
            </div>
            <Featured></Featured>
        </div>
    );
};

export default Home;