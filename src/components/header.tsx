import Button from "./button";
import Image from "next/image";
import logo from '@/assets/logo.png';

const menuItems = ["Products", "Industries", "Company", "Resources"];

const Header: React.FC = () => (
    <header className="flex flex-wrap shadow-red-200/80  shadow-sm gap-5 justify-between px-20 pt-9 pb-5 w-full text-sm text-black bg-white max-md:px-5 max-md:max-w-full">
        <Image
            src={logo}
            width={232}
            height={41}
            alt="Company logo"
            className="object-contain shrink-0 max-w-full aspect-[5.65] w-[232px]"
        />
        <nav className="flex overflow-hidden flex-wrap gap-9 justify-center items-center self-start max-md:max-w-full">
            {menuItems.map((item, index) => (
                <a
                    key={index}
                    href="#"
                    className="self-stretch my-auto leading-none text-center whitespace-nowrap rounded-none"
                >
                    {item}
                </a>
            ))}

            <Button
                text="Schedule Demo"
                icon
            />
        </nav>
    </header>
);

export default Header;
