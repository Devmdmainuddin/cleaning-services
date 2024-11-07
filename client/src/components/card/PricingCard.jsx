import { IoIosCheckmark } from "react-icons/io";
import Image from "../shared/Image";


const PricingCard = () => {
    return (
        <div className="w-[424px] p-8 bg-white rounded-[10px] hover:bg-[#F0FCF7] border border-[#8FCCB3]/30 hover:border-[#2B8761] transition-all duration-500">
            <div className="img w-[45px] h-[45px]">
                <Image src="/p.png" alt="price image" />
            </div>
            <div className="content">
                <h3 className="text-[#2B8761] font-[Typold] text-[20px] font-medium leading-[160%] mt-4">Cleaning</h3>
                <h2 className="text-[#313131] font-[Typold] text-[36px] font-medium leading-[42%] my-6">$25.00</h2>
                <ul>
                    <li className="text-[#515854] font-[Typold] text-[16px] font-normal leading-[26px] flex gap-1 items-center" > <span className="bg-[#b7ded8] text-[#2B8761] rounded-[5px] "><IoIosCheckmark /></span>1 Bathroom cleaning</li>
                    <li className="text-[#515854] font-[Typold] text-[16px] font-normal leading-[26px] flex gap-1 items-center" > <span className="bg-[#b7ded8] text-[#2B8761] rounded-[5px] "><IoIosCheckmark /></span> Up to 3 bedrooms cleaning</li>
                    <li className="text-[#515854] font-[Typold] text-[16px] font-normal leading-[26px] flex gap-1 items-center" > <span className="bg-[#b7ded8] text-[#2B8761] rounded-[5px] "><IoIosCheckmark /></span> 1 Livingroom cleaning</li>
                    <li className="text-[#515854] font-[Typold] text-[16px] font-normal leading-[26px] flex gap-1 items-center"><span className="bg-[#b7ded8] text-[#2B8761] rounded-[5px] "><IoIosCheckmark /></span> Small kitchen (0 - 150 ft2)</li>
                    <li className="text-[#515854] font-[Typold] text-[16px] font-normal leading-[26px] flex gap-1 items-center"><span className="bg-[#b7ded8] text-[#2B8761] rounded-[5px] "><IoIosCheckmark /></span> Up to 2 additional rooms cleaning </li>
                </ul>
                <button className="text-[#2B8761] font-[Typold] text-[16px] font-medium leading-[22px] tracking-[0%] text-center py-[13px] px-[27px] bg-[#DFE8E5] hover:bg-[#2B8761] hover:text-white rounded-[5px] mt-12 transition-all duration-500"
                >Book Now</button>
            </div>
        </div>
    );
};

export default PricingCard;