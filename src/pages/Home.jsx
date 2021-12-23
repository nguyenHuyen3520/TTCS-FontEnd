import '../assets/font/fontawesome-free-5.15.4-web/fontawesome-free-5.15.4-web/css/all.min.css';
import { Link } from "react-router-dom"
import Helmet from "../components/Halmet"
import Banner from '../components/Banner';
import BannerBtn from '../components/BannerBtn';
import SectionWrapper from '../components/SectionWrapper';
import Video from '../components/Video';
import Review from '../components/Review';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <Helmet title="Trang chủ">
            <Banner />
            <BannerBtn />
            <SectionWrapper />
            <Video />
            <Review />
            <Footer />
        </Helmet>
    )
}

export default Home