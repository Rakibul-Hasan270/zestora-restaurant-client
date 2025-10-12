import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import ctaBg from '../../../assets/cta-bg.jpg';
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useState } from "react";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const CallToAction = () => {
    const axiosPublic = useAxiosPublic();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);
        const imageFile = { image: data.image[0] };
        const resImg = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        // console.log(resImg.data.success);

        if (resImg.data.success) {
            const userInfo = {
                name: data.name,
                email: data.email,
                image: resImg.data.data.display_url,
                tableNo: data.tableNo,
                comment: data.comment,
                date: data.date,
            }
            const resPostData = await axiosPublic.post('/reservation', userInfo);
            if (resPostData.data.insertedId) {
                toast.success(`Mr. ${data.name}, your reservation has been confirmed!`);
                reset();
                setLoading(false);
            } else {
                toast.error(errors.message);
            }
        }
    }

    return (
        <div className="md:mt-28">
            <SectionHeading heading='Reserve Your Table Today' subHeading='Avoid the wait — book your table now and enjoy a seamless dining experience with your friends and family.' />

            <section>
                <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
                    <div className="flex justify-center xl:w-1/2">
                        <img
                            className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full"
                            src={ctaBg}
                            alt=""
                        />
                    </div>

                    <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
                        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-full">

                            {/* for name  */}
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    {...register('name', { required: true })}
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="name"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Name
                                </label>
                                {errors.name && <span className="text-red-500 text-xs">Name is required</span>}
                            </div>

                            {/* for email  */}
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    {...register('email', { required: true })}
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="email"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Email
                                </label>
                                {errors.email && <span className="text-red-500 text-xs">Email is required</span>}
                            </div>

                            {/* for image  */}
                            <div className="mb-4">
                                <label
                                    htmlFor="image"
                                    className="block text-sm text-gray-500 dark:text-gray-300"
                                >
                                    Image
                                </label>

                                <input
                                    {...register('image', { required: true })}
                                    type="file"
                                    id="image"
                                    className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg 
               file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full 
               dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 
               dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
               focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300"
                                />
                                {errors.image && <span className="text-red-500 text-xs">Image is required</span>}
                            </div>

                            {/* book table no  */}
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    {...register('tableNo', { required: true })}
                                    type="number"
                                    name="tableNo"
                                    id="tableNo"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="tableNo"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Table No
                                </label>
                                {errors.tableNo && <span className="text-red-500 text-xs">Table no is required</span>}
                            </div>

                            {/* date of  booking */}
                            <div className="mb-3">
                                <label
                                    htmlFor="date"
                                    className="block text-sm text-gray-500 dark:text-gray-300"
                                >
                                    Reservation date
                                </label>

                                <input
                                    {...register('date', { required: true })}
                                    type="date"
                                    id="date"
                                    placeholder=""
                                    className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg 
               border border-gray-200 bg-white px-5 py-2.5 text-gray-700 
               focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 
               dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                />
                                {errors.date && <span className="text-red-500 text-xs">Date is required</span>}
                            </div>

                            <div>
                                <label
                                    htmlFor="Description"
                                    className="block text-sm text-gray-500 dark:text-gray-300"
                                >
                                    Comment Box
                                </label>

                                <textarea
                                    {...register('comment', { required: true, minLength: 10, maxLength: 60 })}
                                    placeholder="lorem..."
                                    className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                ></textarea>
                            </div>
                            <div>{errors.comment?.type === 'minLength' && <p className="text-red-600">Comment must be 10 characters</p>}</div>
                            <div>{errors.comment?.type === 'maxLength' && <p className="text-red-600">Comment must be less then 60 characters</p>}</div>

                            < button
                                disabled={loading}
                                type="submit"
                                className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 mt-2.5"
                            >
                                {loading ?
                                    <div>
                                        <svg
                                            aria-hidden="true"
                                            className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
                                            viewBox="0 0 100 101"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                fill="currentFill"
                                            />
                                        </svg>
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    : ' Submit'}
                            </button>
                        </form>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default CallToAction;