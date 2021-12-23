import { Link } from "react-router-dom"
import Helmet from "../components/Halmet"
import Banner from './components/Banner';
import BannerBtn from './components/BannerBtn';
import SectionWrapper from './components/SectionWrapper';
import Video from './components/Video';
import Review from './components/Review';

const Home = () => {
    return (
        <Helmet title="Trang chủ">
            <Banner />
            <BannerBtn />
            <SectionWrapper />
            <Video />
            <Review />
        </Helmet>
    )
}

export default Home