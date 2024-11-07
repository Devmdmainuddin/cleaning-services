import Container from "../shared/Container";
import Image from "../shared/Image";


const SingleBanner = () => {
    return (
        <div className="py-[92px] px-16 mt-[56px] bg-[#F2FFFA]">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center relative">
                    <div className="image w-[437px] h-[562px] ">
                        {/* <img src="/hero.jpg" alt="" className='w-full md: border border-[#2B8761] rounded-[10px] relative mx-auto' /> */}
                        <Image src='/bns.png'></Image>
                    </div>
                    <div className="content w-1/2 ">
                        <h2 className="text-[#0C261A] font-typold text-[24px] font-normal leading-[33px]">Stay Connected by Phone</h2>
                        <p className="max-w-[435px] mt-4 text-[#515854] font-typold text-[15px] font-normal leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque tincidunt nisl, morbi aliquet gravida. Lorem adipiscing urna.</p>
                    <div className="flex  items-center gap-3 mt-4">
                        <button className="py-[14px] px-[55px] bg-black text-[#F2FFFA] font-roboto text-[14px] font-normal leading-[16px] rounded-[5px] flex gap-1 items-center"><img src="/go.png" alt="" className="w-6 h-6"/> Google Play</button>
                        <button className="py-[14px] px-[55px] bg-black text-[#F2FFFA] font-roboto text-[14px] font-normal leading-[16px] rounded-[5px] flex gap-1 items-center"> <img src="/ip.png" alt="" className="w-6 h-6"/> Apple Store</button>
                    </div>
                    </div>
                    <div className="w-[85px] h-[85px] absolute top-[32px]  left-[70%] md:left-[40%] z-20">
                        <Image src='/hbgb.png'></Image>
                    </div>
                    <div className="w-[42px] h-[42px] absolute top-[92px]  left-[65%] md:left-[35%] z-20">
                        <Image src='/hbgs.png'></Image>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SingleBanner;