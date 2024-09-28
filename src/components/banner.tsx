interface BannerProps {
    title: string;
    subtitle: string;
}

const Banner: React.FC<BannerProps> = ({
    title,
    subtitle,
}) => {
    return (
        <div className="flex flex-col justify-center items-center px-20 py-20 w-full bg-slate-900 max-md:px-5 max-md:max-w-full">
            <h1 className="text-4xl w-[700px] font-semibold text-center text-white leading-[53px]">
                {title}
            </h1>
            <p className="mt-8 text-lg text-white max-md:max-w-full">{subtitle}</p>
            <button className="flex gap-2 items-center justify-center px-7 py-3 mt-6 hover:bg-blue-50 transition-all duration-200 hover:shadow-sm text-base font-bold text-blue-800 bg-white rounded-[39px] w-fit">
                Lets Talk
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 5.55762C5.33579 5.55762 5 5.8934 5 6.30762C5 6.72183 5.33579 7.05762 5.75 7.05762L5.75 5.55762ZM6.28043 6.83795C6.57332 6.54505 6.57332 6.07018 6.28043 5.77729L1.50746 1.00432C1.21457 0.711423 0.739692 0.711423 0.446799 1.00432C0.153905 1.29721 0.153905 1.77208 0.446799 2.06498L4.68944 6.30762L0.4468 10.5503C0.153906 10.8432 0.153906 11.318 0.4468 11.6109C0.739693 11.9038 1.21457 11.9038 1.50746 11.6109L6.28043 6.83795ZM5.75 7.05762L5.7501 7.05762L5.7501 5.55762L5.75 5.55762L5.75 7.05762Z" fill="#003DB8" />
                </svg>

            </button>
        </div>
    );
};

export default Banner;
