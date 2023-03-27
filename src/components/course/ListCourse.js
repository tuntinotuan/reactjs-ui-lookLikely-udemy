import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import CourseCard from "./CourseCard";
import SwiperNavButtons from "../button/SwiperNavButtons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ListCourse = () => {
  return (
    <div className="relative course-list mt-8">
      <Swiper
        slidesPerView={5}
        grabCursor={"true"}
        spaceBetween={40}
        // slidesPerView={"auto"}
      >
        <SwiperSlide>
          <CourseCard></CourseCard>
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard></CourseCard>
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard></CourseCard>
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard></CourseCard>
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard></CourseCard>
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard></CourseCard>
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard></CourseCard>
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard></CourseCard>
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard></CourseCard>
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard></CourseCard>
        </SwiperSlide>
        <SwiperNavButtons
          positionLeftBtn="top-[50px]"
          positionRightBtn="top-[50px]"
          sizeButton="w-12 h-12"
        ></SwiperNavButtons>
      </Swiper>
      {/* <SwiperNavButtons positionLeftBtn="left-[-100px] top-[50px]"></SwiperNavButtons> */}
    </div>
  );
};

export default ListCourse;
