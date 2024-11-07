import Image from "../shared/Image";
import PropTypes from 'prop-types';

const ServiceCard = ({ item }) => {
    return (
        <div className="w-[312px] group py-12 px-8 bg-white relative overflow-hidden  hover:shadow-[rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px]
 transition-all duration-500 ">
            <div className="image ">
                <div className="w-[72px] h-[72px]  z-20 relative">
                    
                    {/* <img src="/s3.svg" alt=""  className="group-hover:text-white z-20 relative" /> */}
                    <Image src={item.image} alt={item.title} className='group-hover:bg-white transition-all duration-500 z-20 relative' />
                </div>
            </div>
            <div className="content mt-6">
                <h2 className="text-[#0c261a] font-[Typold] text-[20px] font-medium leading-[30px] group-hover:text-white transition-all duration-500 z-20 relative">{item.title}</h2>
                <p className="text-[#515854] font-[Typold] text-[14px] font-normal leading-[22px] mt-2 mb-6 group-hover:text-white transition-all duration-500 z-20 relative">{item.description}</p>
                <button className="py-[14px] px-6 text-[#2B8761] border border-[#2B8761] group-hover:bg-white transition-all duration-500 rounded-[5px] z-20 relative">Book Now</button>
            </div>
            <div className="w-[191px] h-[191px] group-hover:w-[435px] group-hover:h-[650px] absolute -right-[60px] group-hover:-right-[65px] -top-[60px] group-hover:-top-[68px] transition-all duration-500  group-hover:bg-[#008863] group-hover:rounded-full">
                <Image src='/hbgb.png' alt={item.title} className="" />
            </div>
        </div>
    );
};
ServiceCard.propTypes = {
    item: PropTypes.object,
}
export default ServiceCard;