import BlogPost from "./blog-post";
import ReadMoreButton from "./read-more-btn";
import blog1 from "@/assets/blog-1.png";
import blog2 from "@/assets/blog-2.png";
import blog3 from "@/assets/blog-3.png";
import { StaticImageData } from "next/image";

interface BlogPostData {
    date: string;
    category: string;
    title: string;
    imageSrc: StaticImageData;
}

const blogPosts: BlogPostData[] = [
    {
        date: "July 12, 2024",
        category: "Pricefx implementation",
        title: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
        imageSrc:
            blog1,
    },
    {
        date: "July 12, 2024",
        category: "Pricefx implementation",
        title: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
        imageSrc:
            blog2,
    },
    {
        date: "July 12, 2024",
        category: "Pricefx implementation",
        title: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
        imageSrc:
            blog3,
    },
];

const Blog: React.FC = () => {
    return (
        <section className="flex flex-col rounded-none container mx-auto mb-32">
            <div className="flex w-full justify-between ">
                <h1 className="text-6xl w-[84%] text-black leading-[68px]">
                    Consulting Chronicles <br /> Your Guide to Business Excellence
                </h1>
                <ReadMoreButton className="mt-20  " />
            </div>
            <div className="mt-1.5 w-full flex gap-5 ">
                {blogPosts.map((post, index) => (
                    <BlogPost key={index} {...post} isFirst={index === 0} />
                ))}
            </div>
        </section>
    );
};

export default Blog;
