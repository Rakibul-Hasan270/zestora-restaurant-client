import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import img from '../../../assets/Welcome.json'

const AboutUs = () => {
    return (
        <div className="max-w-[1400px] mx-auto bg-base-100 md:mb-28 md:mt-28">
            <p className="text-5xl font-bold text-center mb-12">About Us</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 items-stretch">

                <div className="bg-base-100 shadow-lg rounded-lg p-6 h-full flex flex-col justify-between"
                >
                    <p className='italic text-3xl font-bold text-center mb-6'>Who Are We?</p>
                    <div className="join join-vertical">
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="who" defaultChecked />
                            <div className="collapse-title font-semibold">Our Story</div>
                            <div className="collapse-content text-sm">
                                Our Story is a journey of passion, culture, and flavor — bringing people together through authentic recipes and heartfelt hospitality.
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="who" />
                            <div className="collapse-title font-semibold">Get to Know Us</div>
                            <div className="collapse-content text-sm">
                                Get to Know Us — a team driven by flavor, tradition, and care, creating memorable dining experiences with every plate we serve.
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="who" />
                            <div className="collapse-title font-semibold">Behind Zestora</div>
                            <div className="collapse-content text-sm">
                                Behind zestora lies a passion for blending tradition with creativity, serving food that tells a story with every delicious bite.
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-4'>
                        <Link to='/contact'>
                            <button className='btn btn-info'>Contact</button>
                        </Link>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <div className=''>
                        <Lottie className='hidden md:block w-[500px]' animationData={img} loop={true} />
                    </div>
                </div>

                <div className="bg-base-100 shadow-lg rounded-lg p-6 h-full flex flex-col justify-between">
                    <p className='italic text-3xl font-bold text-center mb-6'>What's Special?</p>
                    <div className="join join-vertical">
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="special" defaultChecked />
                            <div className="collapse-title font-semibold">Fresh, locally-sourced ingredients</div>
                            <div className="collapse-content text-sm">
                                We serve fresh, locally-sourced ingredients — supporting local farms while delivering natural flavor and seasonal goodness in every bite.
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="special" />
                            <div className="collapse-title font-semibold">Fusion & Traditional Recipes</div>
                            <div className="collapse-content text-sm">
                                We combine traditional recipes with modern fusion techniques to offer a dining experience that’s both unique and authentic.
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="special" />
                            <div className="collapse-title font-semibold">100% Halal-certified Meals</div>
                            <div className="collapse-content text-sm">
                                We proudly serve 100% Halal-certified meals, ensuring quality and flavor that meets the highest dietary standards.
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-4'>
                        <Link to='/gallery'>
                            <button className='btn btn-info'>Gallery</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;