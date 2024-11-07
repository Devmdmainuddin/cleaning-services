import TeamCard from "../card/TeamCard";
import Container from "../shared/Container";


const Team = () => {
    const teams = [
        {
            id: 1,
            name: "John Doe",
            role: "House Cleaner",
            image: "/T1.jpg"
        },
        {
            id: 2,
            name: "Jane Smith",
            role: "House Cleaner",
            image: "/T2.jpg"
        },
        {
            id: 3,
            name: "Mark Johnson",
            role: "House Cleaner",
            image: "/T3.jpg"
        },
        {
            id: 4,
            name: "Sarah Wilson",
            role: "House Cleaner",
            image: "/T4.jpg"
        }
    ]
    return (
        <div className="mt-[90px]">
            <Container>
                <div>
                    <h3 className="text-[#2B8761] font-[Typold] text-[18px] font-medium leading-[26px]" >Team Members</h3>
                    <h2 className="text-[#0C261A] font-[Typold] text-[28px] font-medium leading-[32px] tracking-[0px]  mt-2">Our Expert members</h2>
                </div>

                <div className="flex flex-wrap gap-6 justify-center mt-[50px]">
                    {teams.map((item, idx) => <TeamCard key={idx} item={item} />)}
                </div>

            </Container>
        </div>
    );
};

export default Team;