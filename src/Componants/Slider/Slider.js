import React, { useEffect, useState } from 'react';
import {setSliderFunc , resizeFun} from "../../logic";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,  { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([navigator , Pagination , Scrollbar])


function Slider() {


  const [sliderView , setSlider ] = useState(1)

  // Create Function To Change sliderView When Window Resize

  useEffect(() => {
    setSliderFunc(setSlider);
    resizeFun(setSlider);
  })

  return (
    <Swiper
    spaceBetween={10}
    slidesPerView={sliderView}
    centeredSlides={false}
    slidesPerGroupSkip={3}
    grabCursor={true}
    keyboard={{
      enabled: true,
    }}
    breakpoints={{
      769: {
        slidesPerView: sliderView,
        slidesPerGroup: sliderView,
      },
    }}
    scrollbar={true}
    navigation={true}
    pagination={{
      clickable: true,
    }}
    modules={[Keyboard, Scrollbar, Navigation, Pagination]}
    className="mySwiper"
  >
    <SwiperSlide>
      <img src={require("./Photos/POSTER-01 (1).jpg")} alt='img' />
    </SwiperSlide>
    <SwiperSlide>
      <img src={require("./Photos/POSTER-02 (1).jpg")} alt='img' />
    </SwiperSlide>
    <SwiperSlide>
      <img src={require("./Photos/POSTER-03 (1).jpg")} alt='img' />
    </SwiperSlide>
    <SwiperSlide>
      <img src={require("./Photos/POSTER-04.jpg")} alt='img' />
    </SwiperSlide>
    <SwiperSlide>
      <img src={require("./Photos/POSTER-05 (1).jpg")} alt='img' />
    </SwiperSlide>
    <SwiperSlide>
      <img src={require("./Photos/6.jpg")} alt='img' />
    </SwiperSlide>
    <SwiperSlide>
      <img src={require("./Photos/7.webp")} alt='img' />
    </SwiperSlide>
    <SwiperSlide>
      <img src={require("./Photos/8.jfif")} alt='img' />
    </SwiperSlide>
    <SwiperSlide>
      <img src={require("./Photos/9.jfif")} alt='img' />
    </SwiperSlide>
    <SwiperSlide>
      <img src={require("./Photos/10.jfif")} alt='img' />
    </SwiperSlide>
    <SwiperSlide>
      <img src={require("./Photos/11.webp")} alt='img' />
    </SwiperSlide>
    <SwiperSlide>
      <img src={require("./Photos/12.webp")} alt='img' />
    </SwiperSlide>
    <SwiperSlide>
      <img src={require("./Photos/13.jpg")} alt='img' />
    </SwiperSlide>
    <SwiperSlide>
      <img src={require("./Photos/14.jfif")} alt='img' />
    </SwiperSlide>
    <SwiperSlide>
      <img src={require("./Photos/15.jfif")} alt='img' />
    </SwiperSlide>
  </Swiper>
  )
}

export default Slider
