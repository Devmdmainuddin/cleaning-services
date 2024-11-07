import HeroSlider from "../../components/slider/HeroSlider";
import About from "../AboutUs/About";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div className="bg-[#C8FAE5]">
            <HeroSlider></HeroSlider>
            <About/>
            <Services/>
        </div>
    );
};

export default Home;