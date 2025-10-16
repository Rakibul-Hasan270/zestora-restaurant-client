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
        <div className="mt-28">
            <SectionHeading heading='Testimonials' subHeading='Our customers are extremely satisfied with our service. They experienced fast, accurate, and friendly support. Each experience demonstrates the quality of our product and builds trustworthiness.'></SectionHeading>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    review.map(review => <SwiperSlide key={review._id}>
                        <section>
                            <div className="md:max-w-6xl md:px-6 md:py-10 mx-auto">
                                <main className="relative z-20 w-full md:mt-8 md:flex md:items-center xl:mt-12">
                                    <div className="absolute w-full bg-cyan-600 -z-10 md:h-96 rounded-2xl" />

                                    <div className="w-full p-6 bg-cyan-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                                        <img
                                            className="h-24 w-24 
                                            
                                            
                                            
                                            
                                            https://i.ibb.co.com/chRRYmpD/pexels-tima-miroshnichenko-9572419.jpg
https://i.ibb.co.com/dsyLt9TR/pexels-emrekeshavarz-3649240.jpg
https://i.ibb.co.com/WWCbHtcx/pexels-mart-production-8872392.jpg
https://i.ibb.co.com/JRc22Mr0/pexels-koolshooters-6980546.jpg
https://i.ibb.co.com/3YMs42xF/pexels-suzyhazelwood-3091193.jpg
https://i.ibb.co.com/YTLt1pDF/pexels-mikechie-esparagoza-749296-1660613.jpg
https://i.ibb.co.com/CFWQjKy/pexels-koolshooters-6980696.jpg
https://i.ibb.co.com/84L51wH6/pexels-cristian-rojas-7260644.jpg
https://i.ibb.co.com/LX61Gn57/pexels-anh-nguyen-517648218-27045934.jpg
https://i.ibb.co.com/BKqCsqkD/woman-reading-book-table.jpgmd:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
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