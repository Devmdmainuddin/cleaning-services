import PricingCard from "../card/PricingCard";
import Container from "../shared/Container";


const Pricing = () => {
    return (
        <div className="py-[90px] ">
            <Container>
                <div>
                    <h3 className="text-[#2B8761] font-[Typold] text-[18px] font-medium leading-[32px] tracking-[0px] text-center">Pricing Plan</h3>
                    <h2 className="text-[#0C261A] font-[Typold] text-[28px] font-medium leading-[32px] tracking-[0px] text-center mt-2">Choose Your best Plan </h2>
                </div>
                <div className="flex flex-wrap gap-6 justify-center mt-[50px]">
                <PricingCard></PricingCard>
                <PricingCard></PricingCard>
                <PricingCard></PricingCard>
                </div>
            </Container>
            
        </div>
    );
};

export default Pricing;