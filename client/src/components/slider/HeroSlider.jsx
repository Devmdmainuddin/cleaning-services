

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
const HeroSlider = () => {
    return (
        <div>
            <div className='relative'>
                <Swiper
                    loop={true}
                    navigation={true}
                    pagination={true}
                    slidesPerView={1}
                    spaceBetween={10}
                    modules={[Navigation, Pagination]}
                    className="mySwiper h-[700px]"
                >
                    <SwiperSlide>
                        <div className=" bg-[url('/hero.jpg')] bg-cover h-[700px] flex justify-center items-center flex-col">
                            <h3 className="text-[rgb(245,_250,_248)] font-[Roboto] text-[24px] font-normal leading-[26px] tracking-normal text-center">Reliable and Stable Crews</h3>
                            <h2 className="max-w-[776px] text-[rgb(255,_255,_255)] font-[Typold] text-[85px] font-medium leading-[130%] tracking-[0.59px] text-center">Professional</h2>
                            <h2 className="max-w-[776px] text-[rgb(255,_255,_255)] font-[Roboto] text-[85px] font-medium leading-[130%] tracking-[0.59px] text-center"><span className='text-[#2B8761] bg-white p-1'>cleaning</span>  services</h2>
                            <p className="max-w-[793px] mt-[30px] text-[rgb(242,_255,_250)] font-[Typold] text-[20px] font-normal leading-[26px] tracking-normal text-center">While you are doing something important, we will put things in order in the apartment, private house or office</p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                    <div className=" bg-[url('/hero.jpg')] bg-cover h-[700px] flex justify-center items-center flex-col">
                            <h3 className="text-[rgb(245,_250,_248)] font-[Roboto] text-[24px] font-normal leading-[26px] tracking-normal text-center">Reliable and Stable Crews</h3>
                            <h2 className="max-w-[776px] text-[rgb(255,_255,_255)] font-[Typold] text-[85px] font-medium leading-[130%] tracking-[0.59px] text-center">Professional</h2>
                            <h2 className="max-w-[776px] text-[rgb(255,_255,_255)] font-[Roboto] text-[85px] font-medium leading-[130%] tracking-[0.59px] text-center"><span className='text-[#2B8761] bg-white p-1'>cleaning</span>  services</h2>
                            <p className="max-w-[793px] mt-[30px] text-[rgb(242,_255,_250)] font-[Typold] text-[20px] font-normal leading-[26px] tracking-normal text-center">While you are doing something important, we will put things in order in the apartment, private house or office</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className=" bg-[url('/hero.jpg')] bg-cover h-[700px] flex justify-center items-center flex-col">
                            <h3 className="text-[rgb(245,_250,_248)] font-[Roboto] text-[24px] font-normal leading-[26px] tracking-normal text-center">Reliable and Stable Crews</h3>
                            <h2 className="max-w-[776px] text-[rgb(255,_255,_255)] font-[Typold] text-[85px] font-medium leading-[130%] tracking-[0.59px] text-center">Professional</h2>
                            <h2 className="max-w-[776px] text-[rgb(255,_255,_255)] font-[Roboto] text-[85px] font-medium leading-[130%] tracking-[0.59px] text-center"><span className='text-[#2B8761] bg-white p-1'>cleaning</span>  services</h2>
                            <p className="max-w-[793px] mt-[30px] text-[rgb(242,_255,_250)] font-[Typold] text-[20px] font-normal leading-[26px] tracking-normal text-center">While you are doing something important, we will put things in order in the apartment, private house or office</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="hidden md:inline-block absolute left-1/2 bottom-0 transform translate-x-[-50%] translate-y-[50%] w-2/3  bg-white z-20 p-4 rounded-[10px] shadow-[rgba(100,_100,_111,_0.2)_0px_7px_29px_0px]" >
                    <div className='flex flex-wrap items-center gap-6 justify-center'>
                        <select name="" id="" className='w-[265px] text-[#505753] font-[Roboto] text-[14px] font-normal leading-[22px] tracking-[0.25px] p-4 border border-solid border-[#8FCCB3] outline-0 rounded-[5px]'>
                            <option value="">Appointment Cleaning</option>
                            <option value="1">City 1</option>
                            <option value="2">City 2</option>
                            <option value="3">City 3</option>
                        </select>
                        <select name="" id="" className='w-[265px] text-[#505753] font-[Roboto] text-[14px] font-normal leading-[22px] tracking-[0.25px] p-4 border border-solid border-[#8FCCB3] outline-0 rounded-[5px]'>
                            <option value="">Your Address</option>
                            <option value="1">Service 1</option>
                            <option value="2">Service 2</option>
                            <option value="3">Service 3</option>
                        </select>
                        <select name="" id="" className='w-[265px] text-[#505753] font-[Roboto] text-[14px] font-normal leading-[22px] tracking-[0.25px] p-4 border border-solid border-[#8FCCB3] outline-0 rounded-[5px]'>
                            <option value="">State</option>
                            <option value="1">Date 1</option>
                            <option value="2">Date 2</option>
                            <option value="3">Date 3</option>
                        </select>
                        <select name="" id="" className='w-[265px] text-[#505753] font-[Roboto] text-[14px] font-normal leading-[22px] tracking-[0.25px] p-4 border border-solid border-[#8FCCB3] outline-0 rounded-[5px]'>
                            <option value="">Appointment Cleaning</option>
                            <option value="1">Time 1</option>
                            <option value="2">Time 2</option>
                            <option value="3">Time 3</option>
                        </select>
                        <select name="" id="" className='w-[265px] text-[#505753] font-[Roboto] text-[14px] font-normal leading-[22px] tracking-[0.25px] p-4 border border-solid border-[#8FCCB3] outline-0 rounded-[5px]'>
                            <option value="">Your Address</option>
                            <option value="1">Time 1</option>
                            <option value="2">Time 2</option>
                            <option value="3">Time 3</option>
                        </select>
                        <button className="w-[265px] bg-[#2B8761] text-white text-xl py-3 px-12 rounded-sm font-semibold">Book Now</button>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default HeroSlider;