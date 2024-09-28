import Image, { StaticImageData } from "next/image";
import ReadMoreButton from "./read-more-btn";

interface BlogPostProps {
    date: string;
    category: string;
    title: string;
    imageSrc: StaticImageData;
    isFirst: boolean;
}

const BlogPost: React.FC<BlogPostProps> = ({
    date,
    category,
    title,
    imageSrc,
    isFirst,
}) => {
    return (
        <article
            className={`flex flex-col ${isFirst ? "w-[33%]" : "ml-5 w-[33%]"
                } max-md:ml-0 max-md:w-full`}
        >
            <div
                className={`flex flex-col ${isFirst ? "items-start w-full text-black" : "mt-10 w-full text-black"
                    }`}
            >
                {isFirst && (
                    <div className="flex shrink-0 bg-red-600 h-[11px] w-[182px]" />
                )}
                <Image
                    width={500}
                    height={500}

                    src={imageSrc}
                    alt=""
                    className={`object-contain ${isFirst ? "self-stretch mt-7" : ""
                        } w-full aspect-[1.49]`}
                />
                <div
                    className={`flex gap-2 ${isFirst ? "mt-5" : "self-start mt-5"
                        } text-xs leading-none`}
                >
                    <span className="px-3 py-2 border border-violet-400 border-solid rounded-[39px]">
                        {date}
                    </span>
                    <span className="px-3 py-2 border border-violet-400 border-solid rounded-[39px]">
                        {category}
                    </span>
                </div>
                <h2
                    className={`${isFirst ? "self-stretch mt-4 mr-6" : "mt-4 mr-6"
                        } text-4xl leading-10 max-md:mr-2.5`}
                >
                    {title}
                </h2>
                <ReadMoreButton className={`${isFirst ? "mt-7" : "self-start mt-7"} `} />
            </div>
        </article>
    );
};

export default BlogPost;
