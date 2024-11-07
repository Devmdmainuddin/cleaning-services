import Image from "../shared/Image";
import { FaFacebookF, FaInstagramSquare, FaPinterestSquare, FaTwitter, FaYoutube } from "react-icons/fa";

const TeamCard = ({ item }) => {
    return (
        <div className="w-[312px] hover:shadow-[rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px]
 transition-all duration-500 ">
            <div className="image">
                <Image src={item.image}></Image>
            </div>
            <div className="content border border-[#8FCCB3]/30">
                <h3 className="text-[#0C261A] font-[Typold] text-[20px] font-medium leading-[32px] tracking-[0px] text-center mt-4">{item.name}</h3>
                <p className="text-[#69726C] font-[Typold] text-[16px] font-medium leading-[32px] tracking-[0px] text-center">{item.role}</p>
                <ul className="flex gap-2 items-center justify-center my-4">
                    <li className="rounded-[5px] bg-[#2B8761]/10 hover:bg-[#2B8761] hover:text-white transition-all duration-500 w-[36px] h-[36px] flex justify-center items-center"><FaFacebookF /></li>
                    <li className="rounded-[5px] bg-[#2B8761]/10 hover:bg-[#2B8761] hover:text-white transition-all duration-500 w-[36px] h-[36px] flex justify-center items-center" ><FaTwitter /></li>
                    <li className="rounded-[5px] bg-[#2B8761]/10 hover:bg-[#2B8761] hover:text-white transition-all duration-500 w-[36px] h-[36px] flex justify-center items-center" ><FaInstagramSquare /></li>
                    <li className="rounded-[5px] bg-[#2B8761]/10 hover:bg-[#2B8761] hover:text-white transition-all duration-500 w-[36px] h-[36px] flex justify-center items-center"><FaYoutube /></li>
                    <li className="rounded-[5px] bg-[#2B8761]/10 hover:bg-[#2B8761] hover:text-white transition-all duration-500 w-[36px] h-[36px] flex justify-center items-center" ><FaPinterestSquare /></li>
                </ul>
            </div>
        </div>
    );
};

export default TeamCard;