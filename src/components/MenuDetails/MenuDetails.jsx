import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";
import SectionHeading from "../SectionHeading/SectionHeading";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const MenuDetails = () => {
    const { image, name, price, rating, category, description, _id } = useLoaderData();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const handelAddToCard = async () => {
        const itemInfo = { image, name, email: user.email, price, rating, category, description, menuId: _id };
        try {
            const resAddCart = await axiosSecure.post(`/cart`, itemInfo);
            if (resAddCart.data.insertedId) {
                toast.success(`${name} added to your cart`);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <SectionHeading heading='Sip, Refresh & Relax' subHeading='Energize your morning with our wholesome breakfast options — from fluffy pancakes to protein-packed omelettes, freshly baked bread, and aromatic coffee.'></SectionHeading>

            <div className="max-w-6xl mx-auto my-12 md:px-4">
                <div className="grid md:grid-cols-2 gap-8 bg-white/80 dark:bg-gray-900/90 border border-cyan-200 dark:border-cyan-700 rounded-2xl shadow-2xl backdrop-blur-md overflow-hidden">

                    <div className="relative">
                        <img
                            className="w-full md:h-96 object-cover md:rounded-l-2xl"
                            src={image}
                            alt={name}
                        />
                        <span className="absolute top-4 left-4 bg-gradient-to-r from-cyan-600 to-cyan-400 text-white px-4 py-1 text-xs font-semibold rounded-full shadow-lg">
                            {category}
                        </span>
                    </div>

                    <div className="flex flex-col justify-between px-8 py-6">
                        <div>
                            <h1 className="text-xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                                {name}
                            </h1>

                            <div className="flex items-center mb-6">
                                <Rating style={{ maxWidth: 160 }} value={rating} readOnly />
                                <span className="ml-3 text-sm font-medium text-cyan-700 dark:text-cyan-300">
                                    {rating} / 5
                                </span>
                            </div>

                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-6">
                                {description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                            <span className="text-xl md:text-4xl font-extrabold text-cyan-700 dark:text-cyan-400">
                                ${price}
                            </span>

                            <button onClick={handelAddToCard} className="bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 text-white font-semibold rounded-xl text-sm px-2 md:px-8 py-1 md:py-3 shadow-lg transform transition duration-300 hover:scale-105">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenuDetails;
