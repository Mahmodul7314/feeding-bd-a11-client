import { Helmet } from "react-helmet";
import About from "../../Components/AboutSection/About";
import Banner from "../../Components/Banner/Banner";
import Foods from "../../Components/Foods/Foods";
import Review from "../../Components/Review/Review";
const Home = () => {
    return (
        <div className="bg-[#FFFFFF]">
            <Helmet>{Home}</Helmet>
          
            <Banner></Banner>
            <Foods></Foods>
            <About></About>
            <Review></Review>

        </div>
    );
};

export default Home;