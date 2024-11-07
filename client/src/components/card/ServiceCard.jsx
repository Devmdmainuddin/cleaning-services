import Image from "../shared/Image";


const ServiceCard = ({ item }) => {
    return (
        <div className="w-[312px] py-12 px-8 bg-white relative overflow-hidden">
            <div className="image ">
                <div className="w-[72px] h-[72px] ">  
                <Image src={item.image} alt={item.title}  />
                </div>
            </div>
            <div className="content mt-6">
                <h2 className="text-[#0c261a] font-[Typold] text-[20px] font-medium leading-[30px]">{item.title}</h2>
                <p className="text-[#515854] font-[Typold] text-[14px] font-normal leading-[22px] mt-2 mb-6">{item.description}</p>
            <button className="py-[14px] px-6 text-[#2B8761] border border-[#2B8761] hover:bg-[#2B8761] hover:text-white transition-all duration-500 rounded-[5px]">Book Now</button>
            </div>
            <div className="w-[191px] h-[191px] absolute -right-[60px] -top-[60px] ">  
                <Image src='/hbgb.png' alt={item.title} className="" />
            </div>
        </div>
    );
};

export default ServiceCard;