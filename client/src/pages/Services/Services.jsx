import ServiceCard from "../../components/card/ServiceCard";
import Container from "../../components/shared/Container";
import Image from "../../components/shared/Image";


const Services = () => {
    const service = [
        {
            id: 1,
            title: "Residential Cleaning",
            description: "You’ll have your own moving representative on-call, any time of day or night. No automated systems or unanswered questions.",
            image: "/s1.png"
        },
        {
            id: 2,
            title: "Commercial Cleaning",
            description: "You’ll have your own moving representative on-call, any time of day or night. No automated systems or unanswered questions.",
            image: "/s2.png"
        },
        {
            id: 3,
            title: "Event Cleanup",
            description: "You’ll have your own moving representative on-call, any time of day or night. No automated systems or unanswered questions.",
            image: "/s3.png"
        },
        {
            id: 4,
            title: "Window Cleaning",
            description: "You’ll have your own moving representative on-call, any time of day or night. No automated systems or unanswered questions.",
            image: "/s4.svg"
        },
        {
            id: 5,
            title: "Outdoor Furniture",
            description: "You’ll have your own moving representative on-call, any time of day or night. No automated systems or unanswered questions.",
            image: "/s5.png"
        },
        {
            id: 6,
            title: "Laundray Service",
            description: "You’ll have your own moving representative on-call, any time of day or night. No automated systems or unanswered questions.",
            image: "/s6.png"
        },
        {
            id: 7,
            title: "Car Wash",
            description: "You’ll have your own moving representative on-call, any time of day or night. No automated systems or unanswered questions.",
            image: "/s7.png"
        },
        {
            id: 8,
            title: "Sofa Cleaning",
            description: "You’ll have your own moving representative on-call, any time of day or night. No automated systems or unanswered questions.",
            image: "/s8.png"
        }
    ];
    
    return (
        <div className="py-[90px] bg-[linear-gradient(90deg,_rgba(225,_245,_238,_0.9682)_15%,_rgba(242,_247,_245,_1)_51%,_rgba(244,_247,_246,_0.6993)_95%,_rgba(245,_252,_250,_1)_100%,_rgba(246,_246,_247,_1)_100%)]">
            <Container>
                <div className="relative">
                    <div>
                        <h2 className="text-[#0c261a] font-[Inter] text-[28px] font-medium leading-[36px]">Professional Care and Services</h2>
                        <p className="text-[#515854] max-w-[552px] mt-[10px] font-[Typold] text-[16px] font-normal leading-[24px] tracking-[0.25px]">Advancing Cleaning & Outsourced Staff Service through Skilled Management.
                            Cleaning Driving And Security Service</p>
                    </div>
                    <div className="mt-[50px] flex flex-wrap justify-center gap-6">
                        {service.map((item,idx)=><ServiceCard key={idx} item={item}></ServiceCard>)}
                        
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

export default Services;