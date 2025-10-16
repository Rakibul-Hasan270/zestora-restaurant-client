const SectionHeading = ({ heading, subHeading }) => {
    return (
        <div className='text-center space-y-3.5 mb-8 md:mb-14'>
            <h2 className='text-2xl md:text-4xl uppercase font-bold'>{heading}</h2>
            <p className='md:max-w-3xl mx-auto'>{subHeading}</p>
        </div>
    );
};

export default SectionHeading;