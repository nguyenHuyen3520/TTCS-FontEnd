import { Link, useLocation } from 'react-router-dom'
import Helmet from "../components/Halmet"
import Slider from "../components/Slider"
import { Swiper, SwiperSlide } from "swiper/react";
import image from "../assets/image/catalog/Banner_ReactJS.png"
import Image from "../components/Image";
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';
import Footer from "../components/Footer";
import HeaderHome from "../components/HeaderHome";
import {AiFillHome} from "react-icons/ai";
import {AiFillSignal} from "react-icons/ai";
import {AiFillHdd} from "react-icons/ai";
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);
const Home = () => {
    const links = [
        {
            name: "Home",
            path: "/home",
            icon : <AiFillHome style={{fontSize: '25px', color: 'black'}}/>
        },
        {
            name: "Lộ trình",
            path: "/learning-paths",
            icon: <AiFillSignal style={{fontSize: '25px', color: 'black'}}/>
        },
        {
            name: "Admin",
            path: "/admin",
            icon: <AiFillHdd style={{fontSize: '25px', color: 'black'}}/>
        }
    ]
    const classes = [
        {
            name: "Reactjs - 1",
            description: "Khóa học ReactJS từ cơ bản tới nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS.",
            image: image,
            color: "#0185fe"
        },
        {
            name: "Reactjs - 2",
            description: "Khóa học ReactJS từ cơ bản tới nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS.",
            image: image,
            color: "#0185fe"
        },
        {
            name: "Reactjs - 3",
            description: "Khóa học ReactJS từ cơ bản tới nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS.",
            image: image,
            color: "#0185fe"
        }
    ]

    const { pathname } = useLocation()
    const activeNav = links.findIndex(e => e.path === pathname)
    return (
        <Helmet title="">
            <HeaderHome/>
            <div className="Catalog">
                <div className="Catalog__left">
                    {
                        links.map((item, index)=>(
                            <div key={index} style={{margin: "20px 0"}}>                                
                                <Link to={item.path}>
                                <div style={{width: "70%", textAlign: "center"}} className={`${index === activeNav ? 'active' : ''}`}>
                                    <div>
                                        {item.icon}
                                    </div>
                                    <div>
                                        {item.name}
                                    </div>
                                </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <div className="Catalog__right" style={{ width: 'calc(100% - 100px)' }}>
                    <Slider
                        style={{ width: "100%" }}
                        height={270} classes={classes}
                    />
                    <div>
                        <div className="Catalog__right__title">
                            <h2>Khóa đang học</h2>
                        </div>
                        <Swiper
                            slidesPerView={5} spaceBetween={5} navigation={true} pagination={{
                                "clickable": true
                            }} className="mySwiper"
                        >
                            {
                                classes.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div style={{width: '320px !important'}}>
                                            <Image  src="https://cdn.fullstack.edu.vn/f8-learning/courses/7.png" width={320} />
                                            <h3>{item.name}</h3>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    <div>
                        <div className="Catalog__right__title">
                            <h2>Khóa bạn có thể quan tâm</h2>
                        </div>
                        <Swiper
                            slidesPerView={5} spaceBetween={5} navigation={true} pagination={{
                                "clickable": true
                            }} className="mySwiper"
                        >
                            {
                                classes.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div style={{width: '320px !important'}}>
                                            <Image  src="https://cdn.fullstack.edu.vn/f8-learning/courses/7.png" width={320} />
                                            <h3>{item.name}</h3>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
            <Footer/>
        </Helmet>
    )
}

export default Home