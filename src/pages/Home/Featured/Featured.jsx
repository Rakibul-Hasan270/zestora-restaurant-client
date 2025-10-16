import fetared from '../../../assets/fetared-bg.jpg';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';


const Featured = () => {
    return (
        <div className='mt-20 md:mt-32'>
            <SectionHeading heading='Why Choose Us' subHeading='Everything you need to get started quickly and also fresh Food.'></SectionHeading>
            <section
                style={{ backgroundImage: `linear-gradient(to right, #151515, rgba(21, 21, 21, 0)), url('${fetared}')` }}
                className="bg-cover bg-center md:h-[600px] w-full"
            >
                <div className="max-w-6xl px-6 py-10 mx-auto">


                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-28 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                        <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                    />
                                </svg>
                            </span>

                            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                                Authentic Taste of Tradition
                            </h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                We bring the flavors of tradition to a modern setting. Every dish carries the nostalgic taste of home-cooked meals with a touch of local heritage.
                            </p>
                        </div>

                        <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                    />
                                </svg>
                            </span>

                            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                                Fresh & Locally Sourced Ingredients
                            </h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                All our ingredients are sourced fresh from local markets every day, ensuring healthy, flavorful meals served straight from farm to table.
                            </p>
                        </div>

                        <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                    />
                                </svg>
                            </span>

                            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                                Cozy Ambiance & Exceptional Service
                            </h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                From warm lighting to comfortable seating and friendly staff — every detail is designed to make your dining experience relaxing and memorable.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Featured;



// import { Parallax } from 'react-parallax';
// import fetared from '../../../assets/fetared-bg.jpg';
// import SectionHeading from '../../../components/SectionHeading/SectionHeading';

// const Featured = () => {
//     return (
//         <Parallax bgImage={fetared} strength={400}>
//             <div className="h-[700px] flex flex-col justify-center">
//                 <div className="container mx-auto px-6 text-center">
//                     <SectionHeading
//                         heading="Why Choose Us"
//                         subHeading="Everything you need to get started quickly and fresh item"
//                     />
//                     <section
//                         className="bg-cover bg-center md:h-[700px] w-full"
//                     >
//                         <div className="container px-6 py-10 mx-auto">


//                             <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-48 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
//                                 <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
//                                     <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             className="w-6 h-6"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth="2"
//                                                 d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
//                                             />
//                                         </svg>
//                                     </span>

//                                     <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
//                                         Copy & paste components
//                                     </h1>

//                                     <p className="text-gray-500 dark:text-gray-300">
//                                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
//                                     </p>

//                                     <a
//                                         href="#"
//                                         className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
//                                     >
//                                         <span className="mx-1">read more</span>
//                                         <svg
//                                             className="w-4 h-4 mx-1 rtl:-scale-x-100"
//                                             fill="currentColor"
//                                             viewBox="0 0 20 20"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                             <path
//                                                 fillRule="evenodd"
//                                                 d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
//                                                 clipRule="evenodd"
//                                             />
//                                         </svg>
//                                     </a>
//                                 </div>

//                                 <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
//                                     <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             className="w-6 h-6"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth="2"
//                                                 d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
//                                             />
//                                         </svg>
//                                     </span>

//                                     <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
//                                         Zero Configuration
//                                     </h1>

//                                     <p className="text-gray-500 dark:text-gray-300">
//                                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
//                                     </p>

//                                     <a
//                                         href="#"
//                                         className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
//                                     >
//                                         <span className="mx-1">read more</span>
//                                         <svg
//                                             className="w-4 h-4 mx-1 rtl:-scale-x-100"
//                                             fill="currentColor"
//                                             viewBox="0 0 20 20"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                             <path
//                                                 fillRule="evenodd"
//                                                 d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
//                                                 clipRule="evenodd"
//                                             />
//                                         </svg>
//                                     </a>
//                                 </div>

//                                 <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
//                                     <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             className="w-6 h-6"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth="2"
//                                                 d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
//                                             />
//                                         </svg>
//                                     </span>

//                                     <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
//                                         Simple & clean designs
//                                     </h1>

//                                     <p className="text-gray-500 dark:text-gray-300">
//                                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
//                                     </p>

//                                     <a
//                                         href="#"
//                                         className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
//                                     >
//                                         <span className="mx-1">read more</span>
//                                         <svg
//                                             className="w-4 h-4 mx-1 rtl:-scale-x-100"
//                                             fill="currentColor"
//                                             viewBox="0 0 20 20"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                             <path
//                                                 fillRule="evenodd"
//                                                 d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
//                                                 clipRule="evenodd"
//                                             />
//                                         </svg>
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                 </div >
//             </div >
//         </Parallax >
//     );
// };

// export default Featured;
