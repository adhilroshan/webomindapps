interface ReadMoreButtonProps {
    className?: string;
}

const ReadMoreButton: React.FC<ReadMoreButtonProps> = ({ className = "" }) => {
    return (
        <button
            className={`flex gap-3.5 px-6 py-4 w-fit hover:bg-red-700 transition-all duration-200 text-lg text-white bg-red-600 rounded-[50px] max-md:px-5 ${className}`}
        >
            <span
                className="flex shrink-0 my-auto bg-white rounded-full h-[18px] w-[18px]"
                aria-hidden="true"
            />
            <span>Read more</span>
        </button>
    );
};

export default ReadMoreButton;
