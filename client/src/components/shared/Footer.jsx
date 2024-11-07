import { Link } from "react-router-dom";
import Container from "./Container";


const Footer = () => {
    return (
        <div className="mt-[71px]">
            <Container>
                <div className="flex flex-wrap  justify-between">
                    <div className="w-[336px]">
                        <h2 className="text-[#2B8761] font-typold text-[24px] font-extrabold leading-[33px] tracking-tight text-left uppercase">Cleaning.Co</h2>
                        <p className="mt-6 text-[#515854] font-typold text-[14px] font-normal leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipis cin gelit. Ut id consectetur in integer ullamc or per ut in. Suspendisse et amet faucibus a duis sapien. Et vitae augue integer at arcu, hac a.Nun c facilisis vitae erat in nam eu at consectetur nec erat.</p>
                    </div>
                    <div>
                        <h2 className="text-[#0C261A] font-typold text-[20px] font-medium leading-[27px]">Services</h2>
                        <nav>
                            <ul>
                                <li className="text-[#515854] font-typold text-[14px] font-normal leading-[22px]">Residential Clean</li>
                                <li className="text-[#515854] font-typold text-[14px] font-normal leading-[22px]">Commercial Clean</li>
                                <li className="text-[#515854] font-typold text-[14px] font-normal leading-[22px]">Window Cleaning</li>
                                <li className="text-[#515854] font-typold text-[14px] font-normal leading-[22px]">Outdoor Furniture</li>
                                <li className="text-[#515854] font-typold text-[14px] font-normal leading-[22px]">Laundray Services</li>
                                <li className="text-[#515854] font-typold text-[14px] font-normal leading-[22px]">Car Wash</li>
                                <li className="text-[#515854] font-typold text-[14px] font-normal leading-[22px]">Sofa Wash</li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <h2 className="text-[#0C261A] font-typold text-[20px] font-medium leading-[27px]">Useful Link</h2>
                        <ul>
                            <li className="text-[#515854] font-typold text-[14px] font-normal leading-[22px]">Projects</li>
                            <li className="text-[#515854] font-typold text-[14px] font-normal leading-[22px]">Blog</li>
                            <li className="text-[#515854] font-typold text-[14px] font-normal leading-[22px]">About Us</li>
                            <li className="text-[#515854] font-typold text-[14px] font-normal leading-[22px]">Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-[#0C261A] font-typold text-[20px] font-medium leading-[27px]">Subscribe to newsletter</h2>
                        <input type="email" name="" id="" placeholder="Your Email address" className="border border-[#2B8761] w-full p-4 mt-6 rounded-[5px]" />
                        <Link className="text-white bg-[#2B8761] text-[16px] font-medium  text-center py-[13px] px-[22px] rounded-[5px] mt-8 inline-block">Subscribe</Link>
                    </div>
                </div>
            </Container>
            <Container className='border-t mt-[71px]'>
            <div className=" py-4 flex justify-between items-center">
                <div className="flex items-center gap-[26px]">
                    <span className="text-[#515854] font-typold text-[14px] font-normal leading-[22px]">2022 @cleaning.Co</span>
                    <p className="text-[#515854] font-typold text-[14px] font-normal leading-[22px]">All rights reserved</p>
                </div>
                <div className="flex items-center gap-[26px]">
                    <span className="text-[#515854] font-typold text-[14px] font-normal leading-[22px]">Terms and Consitions</span>
                    <p className="text-[#515854] font-typold text-[14px] font-normal leading-[22px]">Privacy Policy</p>
                </div>
            </div>
            </Container>
            

        </div>
    );
};

export default Footer;