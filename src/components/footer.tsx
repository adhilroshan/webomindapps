import React from "react";
import logo from '@/assets/logo.png';
import Image from "next/image";
import socialTemp from '@/assets/social-temp.png';
const Footer: React.FC = () => {
    const products = ["Retail Insurance", "LendPro", "EmbedPro", "Console"];
    const industries = [
        "Insurance Brokers",
        "Banks",
        "NBFCS",
        "Fintech",
        "Embedded Insurance",
    ];
    const otherLinks = [
        "About us",
        "Careers",
        "News & Media",
        "APIs",
        "Case studies",
        "Blogs",
        "FAQs",
    ];


    return (
        <footer className="flex flex-col px-14 pt-4 pb-9 mt-20 container mx-auto bg-white rounded-t-2xl  shadow-[0px_-12px_60px_rgba(131,229,250,0.3)] ">
            <div className="flex flex-wrap gap-5 justify-between ">
                <Image
                    src={logo}
                    width={232}
                    height={41}
                    alt="Company logo"
                    className="object-contain shrink-0 max-w-full aspect-[5.65] w-[232px]"
                />
                <Image
                    src={socialTemp}
                    className="object-contain shrink-0 w-48 max-w-full aspect-[2.53]"
                    alt="Partner logo"
                />
            </div>
            <hr />
            <div className="flex flex-col mt-3 text-base text-neutral-800 ">
                <div className="flex flex-wrap justify-between items-start ">
                    {/* <ProductList /> */}
                    <div className="flex flex-col leading-7">
                        <h2 className="font-semibold text-black">Products</h2>
                        <ul>
                            {products.map((product, index) => (
                                <li key={index} className="mt-1">
                                    {product}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* <IndustryList /> */}
                    <div className="flex flex-col leading-7">
                        <h2 className="font-semibold tracking-normal text-black">Industries</h2>
                        <ul>
                            {industries.map((industry, index) => (
                                <li key={index} className="mt-1">
                                    {industry}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* <OtherLinksList /> */}
                    <div className="flex flex-col leading-7 ">
                        <h2 className="font-semibold tracking-normal text-black">Other links</h2>
                        <ul>
                            {otherLinks.map((link, index) => (
                                <li key={index} className="mt-1">
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* <ContactInfo /> */}
                    <div className="flex flex-col items-start w-96 font-light rounded-none  text-neutral-500">
                        <h2 className="font-semibold tracking-normal leading-loose text-black">
                            Get in touch
                        </h2>
                        <div className="flex gap-4 mt-9 tracking-normal leading-7 whitespace-nowrap">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.14251 5.25304C3.50504 5.84496 3.07812 6.8054 3.07812 8.31201C3.07812 8.70033 2.76332 9.01514 2.375 9.01514C1.98668 9.01514 1.67188 8.70033 1.67188 8.31201C1.67188 6.53737 2.18246 5.15406 3.18562 4.22254C4.17936 3.29979 5.54847 2.92139 7.0625 2.92139H16.4375C17.9516 2.92139 19.3207 3.29979 20.3143 4.22254C21.3176 5.15406 21.8281 6.53737 21.8281 8.31201V14.8745C21.8281 16.6492 21.3176 18.0325 20.3143 18.964C19.3207 19.8868 17.9516 20.2651 16.4375 20.2651H7.0625C6.67418 20.2651 6.35938 19.9503 6.35938 19.562C6.35938 19.1737 6.67418 18.8589 7.0625 18.8589H16.4375C17.7359 18.8589 18.7106 18.5341 19.3575 17.9335C19.9949 17.3415 20.4219 16.3811 20.4219 14.8745V8.31201C20.4219 6.8054 19.9949 5.84496 19.3575 5.25304C18.7106 4.65236 17.7359 4.32764 16.4375 4.32764H7.0625C5.76403 4.32764 4.78939 4.65236 4.14251 5.25304Z" fill="#292D32" />
                                <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M16.9869 8.34198C17.2292 8.6454 17.1797 9.08783 16.8763 9.33019L13.9411 11.6746C12.7192 12.6474 10.7715 12.6474 9.54959 11.6746L9.54785 11.6732L6.62286 9.32949C6.31981 9.08667 6.271 8.64416 6.51382 8.34112C6.75664 8.03808 7.19915 7.98926 7.5022 8.23208L10.4263 10.5751C11.1356 11.139 12.3558 11.139 13.0648 10.5747C13.0648 10.5748 13.065 10.5747 13.0648 10.5747L15.9988 8.2314C16.3021 7.98906 16.7445 8.03856 16.9869 8.34198Z" fill="#292D32" />
                                <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M1.67188 15.812C1.67188 15.4237 1.98668 15.1089 2.375 15.1089H8C8.38832 15.1089 8.70312 15.4237 8.70312 15.812C8.70312 16.2003 8.38832 16.5151 8 16.5151H2.375C1.98668 16.5151 1.67188 16.2003 1.67188 15.812Z" fill="#292D32" />
                                <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M1.67188 12.062C1.67188 11.6737 1.98668 11.3589 2.375 11.3589H5.1875C5.57582 11.3589 5.89062 11.6737 5.89062 12.062C5.89062 12.4503 5.57582 12.7651 5.1875 12.7651H2.375C1.98668 12.7651 1.67188 12.4503 1.67188 12.062Z" fill="#292D32" />
                            </svg>

                            <span className="basis-auto">Info@youremailid</span>
                        </div>

                        <div className="shrink-0 self-stretch mt-3.5 h-px border border-solid border-neutral-400"></div>
                        <div className="flex gap-3.5 mt-6 tracking-normal leading-7">

                            <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M12.7352 2.39502L13.434 2.47263C17.2303 2.8942 20.2295 5.88928 20.6552 9.68561L20.7336 10.3844L19.3361 10.541L19.2577 9.84231C18.9053 6.69927 16.422 4.21934 13.2789 3.87029L12.5801 3.79268L12.7352 2.39502Z" fill="#292D32" />
                                <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M12.8013 5.67041L13.4916 5.80448C15.4336 6.1817 16.9508 7.70035 17.3289 9.64151L17.4633 10.3316L16.083 10.6006L15.9486 9.9104C15.6799 8.53094 14.6021 7.45271 13.2235 7.18493L12.5332 7.05086L12.8013 5.67041Z" fill="#292D32" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.07376 2.24268L9.75526 7.29965L8.13812 10.1082C8.19561 10.2777 8.28802 10.5217 8.42569 10.8123C8.70641 11.4046 9.1704 12.1795 9.90123 12.9104C10.6754 13.6846 11.497 14.1921 12.1257 14.5057C12.4385 14.6618 12.7009 14.7684 12.8819 14.8352L15.6824 13.2227L20.8741 17.0511L20.5711 17.5923C19.7036 19.1422 18.5963 20.2496 17.0462 21.1172L16.9011 21.1984L16.735 21.206C12.1612 21.4154 8.22834 18.9283 5.58162 15.8499C4.25373 14.3054 3.22737 12.5887 2.58856 10.9363C1.95459 9.29638 1.67947 7.65908 1.93424 6.29689L1.95657 6.17748L2.01767 6.07249C2.89402 4.56663 4.0254 3.44412 5.52442 2.56489L6.07376 2.24268ZM12.9594 15.602C12.7734 16.2801 12.7733 16.28 12.773 16.28L12.7715 16.2796L12.7689 16.2788L12.7615 16.2768L12.7388 16.2702C12.7201 16.2647 12.6945 16.2569 12.6625 16.2468C12.5985 16.2264 12.5086 16.1963 12.397 16.1552C12.1741 16.073 11.8632 15.9463 11.4981 15.7641C10.7694 15.4007 9.8132 14.8111 8.90687 13.9047C8.03654 13.0344 7.48723 12.1157 7.15494 11.4145C6.98846 11.0632 6.87522 10.7641 6.80268 10.5489C6.76637 10.4412 6.74016 10.3543 6.72249 10.2921C6.71365 10.261 6.70694 10.236 6.70217 10.2177L6.69643 10.1952L6.69461 10.1878L6.69396 10.1851L6.69369 10.184C6.69363 10.1838 6.69346 10.183 7.37745 10.0202L6.69346 10.183L6.62875 9.91134L8.08101 7.38918L5.69892 4.1171C4.70452 4.79422 3.9293 5.61721 3.29659 6.67232C3.14264 7.66933 3.34025 8.98077 3.90022 10.4292C4.47751 11.9226 5.41771 13.5022 6.64794 14.9331C9.08312 17.7654 12.5685 19.9237 16.504 19.8075C17.5706 19.1857 18.369 18.4364 19.0243 17.4342L15.5876 14.9L13.0561 16.3576L12.773 16.28L12.9594 15.602Z" fill="#292D32" />
                            </svg>

                            <span>Phone no</span>
                        </div>
                        <div className="shrink-0 self-stretch mt-3.5 h-px border border-solid border-neutral-400"></div>
                        <button className="flex gap-1 px-9 py-3 justify-center items-center mt-8 font-bold text-white bg-blue-800 rounded-[39px] max-md:px-5">
                            <span>Contact us</span>
                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.75 5.55762C5.33579 5.55762 5 5.8934 5 6.30762C5 6.72183 5.33579 7.05762 5.75 7.05762L5.75 5.55762ZM6.28043 6.83795C6.57332 6.54505 6.57332 6.07018 6.28043 5.77729L1.50746 1.00432C1.21457 0.711423 0.739692 0.711423 0.446799 1.00432C0.153905 1.29721 0.153905 1.77208 0.446799 2.06498L4.68944 6.30762L0.4468 10.5503C0.153906 10.8432 0.153906 11.318 0.4468 11.6109C0.739693 11.9038 1.21457 11.9038 1.50746 11.6109L6.28043 6.83795ZM5.75 7.05762L5.7501 7.05762L5.7501 5.55762L5.75 5.55762L5.75 7.05762Z" fill="#fff" />
                            </svg>
                        </button>
                    </div>
                </div>
                <hr />
            </div>
            <p className="self-start mt-6 text-lg text-zinc-600">
                © 2024 Webomindapps.  Privacy Policy
            </p>
        </footer>
    );
};

export default Footer;
