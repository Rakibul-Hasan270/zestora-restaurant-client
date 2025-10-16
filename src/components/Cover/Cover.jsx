import { Parallax } from "react-parallax";


const Cover = ({ img, title, description }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the reservation"
            strength={-200}
        >
            <div className="hero h-[300px] md:h-[750px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-2xl md:text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5 mx-auto">{description}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;