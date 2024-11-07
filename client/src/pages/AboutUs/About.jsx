import { Link } from "react-router-dom";
import Container from "../../components/shared/Container";
import Image from "../../components/shared/Image";
import { IoIosCall, IoIosCheckmark } from "react-icons/io";
import { TiMessage } from "react-icons/ti";

const About = () => {
    return (
        <div className="bg-[#F2FFFA] py-[264px]">
            <Container>
                <div className="flex justify-center lg:justify-between items-center gap-[155px] lg:gap-0 flex-wrap relative">
                    <div className="image w-full lg:w-1/2 ">
                        <div className="w-full md:w-[362px] h-[379px] border border-[#2B8761] rounded-[10px] relative mx-auto">
                            <div className="w-[184px] h-[253px] rounded-[10px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <Image src='/hero.jpg' alt='' className='rounded-[10px]'></Image>
                            </div>
                            <div className="w-full xl:w-[461px] h-[283px] bg-white py-8 px-4 absolute left-[5%] md:left-[73px]  bottom-0 translate-y-1/2 rounded-[10px]">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-2 items-center">
                                        <div className="w-[70px] h-[70px] rounded-full">
                                            <Image src='/user.png' alt='' className='rounded-full'></Image>
                                        </div>
                                        <div>
                                            <h3 className="text-[#1c1c1c] font-[Typold] text-[20px] font-bold leading-[30px]">A.j Hanna</h3>
                                            <p className="text-[#838383] font-[Typold] text-[14px] font-normal leading-[18px]">CEO</p>
                                        </div>

                                    </div>
                                    <div className="flex gap-2 items-center text-gray-400">
                                        <span><IoIosCall className="text-lg" /></span>
                                        <span><TiMessage className="text-lg" /></span>
                                    </div>
                                </div>
                                <p className="mt-[35px] text-[#6a6a6a] font-[Typold] text-[14px] font-normal leading-[24px] tracking-[0.25px]">Cleaning Co is one of the fastest-growing outsource service and cleaning service provider companies in the Bangladesh and abroad. Smart Force prides itself on being the pioneer outsource service company in-house and abroad.</p>
                            </div>
                            <div className="w-[156px] h-[156px] md:w-[287px] md:h-[287px] rounded-[10px] absolute left-0 bottom-0 translate-y-1/2">
                                <Image src='/hbg.png' alt='' className='rounded-[10px]'></Image>
                            </div>
                        </div>
                    </div>
                    <div className="content w-full lg:w-1/2 mt-6 ">
                        <div className="w-[575px] ml-auto">
                            <h2 className="text-[#0c261a] font-[Typold] text-[28px] font-medium leading-[38px]">The Best help in cleaning the house.</h2>
                            <nav>
                                <ul className="mt-6">
                                    <li className="text-[#515854] font-[Typold] text-[16px] font-normal leading-[26px] flex gap-2 items-center"> <span className="bg-[#b7ded8] text-[#2B8761] rounded-[5px] "><IoIosCheckmark /></span>Our team professional and experienced.</li>
                                    <li className="text-[#515854] font-[Typold] text-[16px] font-normal leading-[26px] flex gap-2 items-center"><span className="bg-[#b7ded8] text-[#2B8761] rounded-[5px] "><IoIosCheckmark /></span> Quick and efficient cleaning service.</li>
                                    <li className="text-[#515854] font-[Typold] text-[16px] font-normal leading-[26px] flex gap-2 items-center"><span className="bg-[#b7ded8] text-[#2B8761] rounded-[5px] "><IoIosCheckmark /></span> 100% satisfaction guaranteed.</li>
                                    <li className="text-[#515854] font-[Typold] text-[16px] font-normal leading-[26px] flex gap-2 items-center"><span className="bg-[#b7ded8] text-[#2B8761] rounded-[5px] "><IoIosCheckmark /></span> Quick and efficient cleaning service.</li>
                                    <li className="text-[#515854] font-[Typold] text-[16px] font-normal leading-[26px] flex gap-2 items-center"><span className="bg-[#b7ded8] text-[#2B8761] rounded-[5px] "><IoIosCheckmark /></span> Highly Discipline in Workplace.</li>
                                </ul>
                            </nav>
                            <Link className="text-white bg-[#2B8761] text-[16px] font-medium  text-center py-[13px] px-[22px] rounded-[5px] mt-8 inline-block">Learn More</Link>
                        </div>
                        

                    </div>
 
                        <div className="w-[85px] h-[85px] absolute -top-[85px] md:-top-10 right-0 md:right-[40%] z-20">
                        <Image src='/hbgb.png'></Image>
                        </div>
                        <div className="w-[42px] h-[42px] absolute -top-[85px] md:-top-10 right-16 md:right-[50%] z-20">
                        <Image src='/hbgs.png'></Image>
                        </div>
                   
                </div>
            </Container>

        </div>
    );
};

export default About;