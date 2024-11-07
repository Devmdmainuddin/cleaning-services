import { Link } from "react-router-dom";
import Image from "../shared/Image";
import PropTypes from 'prop-types';

const BlogCard = ({item}) => {
    const{image,title,description,auth,comment,date} = item;
    return (
        <div className="w-[313px] p-3  border border-[#8FCCB3]/30  rounded-[10px] transition-all duration-500 hover:shadow-[rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] ">
            <div className="image w-[289px] h-[140px]">
                <Image src={image} alt="blog image" />
            </div>
            <div className="content mt-4">
                <h2 className="text-[#0C261A] font-typold text-[20px] font-medium leading-[34px]">{title}</h2>
                <div className="my-[18px] ">
                    <span className="text-[#515854] font-sans text-[14px] font-normal leading-[20px]">{date}</span> | <span className="text-[#515854] font-sans text-[14px] font-normal leading-[20px]">By {auth}</span> | <span className="text-[#515854] font-sans text-[14px] font-normal leading-[20px]">{comment} Comments</span>
                </div>
                <p className="text-[#515854] font-typold text-[16px] font-normal leading-[24px]">{description}</p>
                <Link className="w-full hover:text-white border text-[#2B8761] border-[#2B8761] hover:bg-[#2B8761] text-[16px] font-medium  text-center py-[13px] px-[22px] rounded-[5px] mt-8 inline-block transition-all duration-500">Learn More</Link>
            </div>
        </div>
    );
};
BlogCard.propTypes = {
    item: PropTypes.object,
}
export default BlogCard;