
const SectionHeading = ({ heading, subHeading }) => {
    return (
        <div className='text-center space-y-4 mt-12 mb-12'>
            <h2 className='text-4xl uppercase font-bold'>{heading}</h2>
            <p className='md:max-w-3xl mx-auto'>{subHeading}</p>
        </div>
    );
};

export default SectionHeading;