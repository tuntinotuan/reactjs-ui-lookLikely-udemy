import React from "react";
import { SwiperSlide, Swiper, useSwiper } from "swiper/react";
import { dataFeaturedTeacher } from "../../data/dataConfig";
import SwiperNavButtons from "../button/SwiperNavButtons";
import { Autoplay } from "swiper";

const SlidesTeacherFeatured = () => {
  return (
    <section className="slide-teacher h-[400px] max-w-[900px] mx-auto">
      <Swiper
        cssMode={true}
        grabCursor="true"
        slidesPerView={"auto"}
        modules={[Autoplay]}
        autoplay={true}
      >
        {dataFeaturedTeacher &&
          dataFeaturedTeacher.map((items) => (
            <SwiperSlide>
              <BannerItem
                img={items.avatar_teacher}
                comment={items.comment_teacher}
                name={items.name_teacher}
                career={items.career_teacher}
              ></BannerItem>
            </SwiperSlide>
          ))}
        <SwiperNavButtons
          positionLeftBtn="bottom-[180px]"
          positionRightBtn="bottom-[180px]"
          sizeButton="w-12 h-12"
          // positionLeftBtn="left-[-10px] bottom-[20px]"
        ></SwiperNavButtons>
      </Swiper>
    </section>
  );
};
function BannerItem({ img, comment, name, career }) {
  return (
    <div className="grid grid-cols-2 w-full h-full gap-6 bg-slate-100">
      <img src={img} alt="" className="w-auto h-full" />
      <div className="flex flex-col items-start justify-center">
        <p className="text-2xl mb-5">{comment}</p>
        <h5 className="text-[15px] font-bold">{name}</h5>
        <h6 className="text-[16px] opacity-50">{career}</h6>
      </div>
    </div>
  );
}
export default SlidesTeacherFeatured;
