const SectionHeading = ({ heading, subHeading }) => {
    return (
        <div className='text-center space-y-4 mt-12 mb-12'>
            <h2 className='text-4xl uppercase font-bold'>{heading}</h2>
            <p className='md:max-w-3xl mx-auto'>{subHeading}</p>
        </div>
    );
};

export default SectionHeading;


// import { motion } from "framer-motion";
// const SectionHeading = ({ heading, subHeading }) => {
//     return (
//         <div className="text-center my-10 space-y-4">
//             {/* Subheading */}
//             <motion.p
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="text-sm md:text-base font-medium uppercase tracking-[6px] text-cyan-500"
//             >
//                 {subHeading}
//             </motion.p>
//             {/* Main Heading */}
//             <motion.h2
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6 }}
//                 className="text-3xl md:text-4xl font-bold font-serif text-gray-800 dark:text-gray-200 relative inline-block"
//             >
//                 {heading}
//                 <span className="absolute left-1/2 -bottom-2 w-16 h-[3px] bg-cyan-500 rounded-full -translate-x-1/2"></span>
//             </motion.h2>
//         </div>
//     );
// };

// export default SectionHeading;