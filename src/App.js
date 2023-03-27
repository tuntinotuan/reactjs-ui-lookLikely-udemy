import React, { Fragment, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperNavButtons from "./components/button/SwiperNavButtons";
import Main from "./components/layout/Main";
import Header from "./components/layout/Header";
import Banner from "./components/banner/Banner";
function App() {
  return (
    <Fragment>
      <Header></Header>
      <Banner></Banner>
      <div className="page-container">
        <Swiper
          cssMode={true}
          // navigation={true}
          // pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          autoplay={true}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          {/* <SwiperNavButtons></SwiperNavButtons> */}
        </Swiper>
      </div>
    </Fragment>
  );
}

export default App;
