import { Link } from "react-router-dom"
import Helmet from "../components/Helmet"
import Banner from '../components/Banner';
import BannerBtn from '../components/BannerBtn';
import SectionWrapper from '../components/SectionWrapper';
import Video from '../components/Video';
import Review from '../components/Review';
import Header from '../components/Header';
import Footer from "../components/Footer";
const Home = () => {
    return (
        <Helmet title="Trang chủ">
            <Header />
            <div>
                <Banner />
                <BannerBtn />
                <SectionWrapper />
                <Video />
                <Review />
            </div>
            <Footer />
        </Helmet>
    )
}

export default Home