import React, { useEffect, useState } from 'react';
import {setSliderFunc , resizeFun} from "../../logic";
import {watchData} from "../../data";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,  { Pagination , Navigation } from "swiper";
import { FaCrown } from "react-icons/fa"

import styles from "./Watch.module.css"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use(Pagination);

function Watch( ) {
  const [sliderView , setSlider ] = useState(1)

  // Create Function To Change sliderView When Window Resize

  useEffect(() => {
    setSliderFunc(setSlider);
    resizeFun(setSlider)
  } , [sliderView])

const card = watchData.map( ( e , i ) => {
  return(
    <SwiperSlide key={i}>
    <div  className={styles.card}>
    <div className={styles.layout}>
      <button style={{display: "block"}}>DOTA 2</button>
      <div className={styles.imges}>
        <div className='flc'>
          {e.imgSrc}
        </div>
      </div>
      <div className={styles.imgCaption}>
        <h1> {e.name} </h1>
        <h4> {e.views} </h4>
        <h4> {e.videos} </h4>
      </div>
      <div className={styles.fwBtns}>
      <button>
      <FaCrown />
        <br />
        FOLLOW
        <br />
        NOW
      </button>
      </div>
    </div>
  </div>
  </SwiperSlide>
  )
});
  return (
    <div className={`${styles.watchSlide}`}>
        <div className={`${'container'} ${styles.wsl}`}>
        <Swiper
        spaceBetween={30}
        slidesPerView={sliderView}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
  >
      {card}
        </Swiper>
        </div>
    </div>
  )
}

export default Watch
