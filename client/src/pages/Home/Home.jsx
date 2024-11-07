import Pricing from "../../components/home/Pricing";
import Team from "../../components/home/Team";
import VideoBanner from "../../components/home/VideoBanner";
import HeroSlider from "../../components/slider/HeroSlider";
import SingleBanner from "../../components/slider/SingleBanner";
import About from "../AboutUs/About";
import Blog from "../Blog/Blog";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div className="">
            <HeroSlider></HeroSlider>
            <About/>
            <Services/>
            <VideoBanner/>
            <Pricing/>
            <Team/>
            <Blog/>
            <SingleBanner/>
        </div>
    );
};

export default Home;