import React, {useState, useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { register} from "swiper/element-bundle";
import Banner from "../static/images/carrossel/banner1.png";
import BannerMobile from "../static/images/carrossel/banner1-mobile.png";
import Banner2 from "../static/images/carrossel/banner2.png";
import Banner3 from "../static/images/carrossel/banner3.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

register();

export default function Carrossel(){
    const [size, setSize] = useState(window.innerWidth)
    
    const handleSize = ()=>{
        if (size <= 800){
            return BannerMobile;
        }
        else {
            return Banner;
        }
    }

    return(
        <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay
      className="carrossel">

        <SwiperSlide key="slide1">
            <div className="swiper">
                <img src={handleSize()} alt="slide1" />
            </div>
        </SwiperSlide>
        <SwiperSlide key="slide2">
            <div className="swiper">
                <img src={Banner2} alt="slide1" />
            </div>
        </SwiperSlide>
        <SwiperSlide key="slide3">
            <div className="swiper">
                <img src={Banner3} alt="slide3" />
            </div>
        </SwiperSlide>
      </Swiper>
    );
  }
