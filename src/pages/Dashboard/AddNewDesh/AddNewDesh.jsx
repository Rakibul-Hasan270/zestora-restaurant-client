import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddNewDesh = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] };
        const resImg = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (resImg.data.success) {
            const menuInfo = {
                category: data.category,
                name: data.name,
                description: data.description,
                image: resImg.data.data.display_url,
                price: data.price,
                rating: data.rating
            }
            const resPostData = await axiosSecure.post('/menu', menuInfo);
            if (resPostData.data.insertedId) {
                toast.success(`${data.name} added to menu cart`);
                // todo: must added navigate 
            }
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
                {/* name fild  */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        {...register('name', { required: true })}
                        type="name"
                        name="name"
                        id="name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
      border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 
      dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="name"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 
      duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
      peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
      peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
      peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Item Name
                    </label>
                    {errors.name && <span className="text-red-500 text-xs">Email is required</span>}
                </div>

                {/* category fild  */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        {...register('category', { required: true })}
                        type="category"
                        name="category"
                        id="category"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
      border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 
      dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="category"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 
      duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
      peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
      peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
      peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Item Category
                    </label>
                    {errors.category && <span className="text-red-500 text-xs">Category is required</span>}
                </div>


                {/* desxription fild  */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        {...register('description', { required: true })}
                        type="description"
                        name="description"
                        id="description"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
      border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 
      dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="description"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 
      duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
      peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
      peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
      peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Item Description
                    </label>
                    {errors.description && <span className="text-red-500 text-xs">Description is required</span>}
                </div>

                {/* image fild  */}
                <div className="mb-8">
                    <label
                        htmlFor="file_input"
                        className="block mb-2 text-sm text-gray-900 dark:text-white"
                    >
                        Upload file
                    </label>
                    <input {...register('image', { required: true })} type="file" className="file-input file-input-info w-full" />
                    {errors.category && <span className="text-red-500 text-xs">Image is required</span>}
                </div>

                {/* price and rating fild  */}
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            {...register('price', { required: true })}
                            type="number"
                            name="price"
                            id="price"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
        border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 
        dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                        />
                        <label
                            htmlFor="price"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 
        duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
        peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
        peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Item Price
                        </label>
                        {errors.price && <span className="text-red-500 text-xs">Price is required</span>}
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            {...register('rating', { required: true })}
                            type="number"
                            name="rating"
                            id="rating"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
        border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 
        dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                        />
                        <label
                            htmlFor="rating"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 
        duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
        peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
        peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Item Rating
                        </label>
                        {errors.rating && <span className="text-red-500 text-xs">Rating is required</span>}
                    </div>
                </div>

                <button
                    type="submit"
                    className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none 
    focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 
    text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                    Submit
                </button>
            </form>

        </div>
    );
};

export default AddNewDesh;