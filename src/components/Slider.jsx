import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);
const Slider = (props) => {
    const { height, classes } = props;
    return (
        <>
            <Swiper
                spaceBetween={30} centeredSlides={true} autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }} pagination={{
                    "clickable": true
                }} navigation={true} className="mySwiper"
            >
                {
                    classes.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="Slider" style={{ height: `${height}px`, backgroundColor: `${item.color}` }}>
                                <div className="Slider__left" style={{}}>
                                    <h2>{item.name}</h2>
                                    <p>{item.description}</p>

                                </div>
                                <div className="Slider__right" style={{ backgroundImage: `url("${item.image}")`, height: "100%" }}>
                                    <img src={item.image} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}

export default Slider

