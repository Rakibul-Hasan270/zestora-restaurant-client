import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import '@smastrom/react-rating/style.css';

const Testimonial = () => {
    const axiosPublic = useAxiosPublic();

    const { data: review = [], isLoading } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const res = await axiosPublic.get('/review');
            return res.data;
        }
    })

    if (isLoading) return <p className="text-center text-2xl font-serif text-cyan-500 mt-16 mb-10">Loading...</p>

    return (
        <div>
            <SectionHeading heading='Testimonials' subHeading='Our customers are extremely satisfied with our service. They experienced fast, accurate, and friendly support. Each experience demonstrates the quality of our product and builds trustworthiness.'></SectionHeading>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    review.map(review => <SwiperSlide key={review._id}>
                        <section>
                            <div className="max-w-6xl px-6 py-10 mx-auto"><main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                                <div className="absolute w-full bg-cyan-600 -z-10 md:h-96 rounded-2xl" />

                                <div className="w-full p-6 bg-cyan-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                                    <img
                                        className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                                        src={review.image}
                                        alt="client photo"
                                    />

                                    <div className="mt-2 md:mx-6">
                                        <div>
                                            <p className="text-xl font-medium tracking-tight text-white">{review.name}</p>
                                            <p className="text-blue-200">{review.companyName}</p>
                                        </div>

                                        <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                                            “{review.description}”.
                                        </p>

                                        <div className="flex items-center justify-between mt-6 md:justify-start">
                                            <Rating
                                                style={{ maxWidth: 180 }}
                                                value={review.rating}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </div>
                            </main>
                            </div>
                        </section>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Testimonial;