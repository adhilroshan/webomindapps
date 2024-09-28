import Button from "./button";
import Image from "next/image";
import heroIllustration from '@/assets/hero-illustration.png';

const Hero: React.FC = () => (
    <section className="self-center mt-20 w-full container flex  max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-6 flex-col items-start mt-12 w-full text-sm text-black ">
            <h1 className="self-stretch text-5xl font-semibold leading-[60px] max-md:max-w-full">
                Distribute and manage insurance business in {" "}
                <span className="text-red-600">one platform</span>
            </h1>
            <p className=" w-[379px]">
                Manage your insurance business seamlessly using Riskcovry&apos;s
                assurance platform. Increase revenue, expand product offerings.
            </p>
            <Button
                text="Schedule Demo"
                icon
            />
        </div>
        <div className="flex flex-col ml-5 w-full">
            <div className="flex relative flex-col grow items-start pt-80 rounded-none min-h-[513px] max-md:pt-24 max-md:max-w-full">
                <Image

                    width={1239}
                    height={513}
                    src={heroIllustration}
                    alt="Insurance business illustration"
                    className="object-cover absolute inset-0 size-full"
                />
            </div>
        </div>
    </section>
);

export default Hero;
