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
import CoursesSelection from "./components/layout/CoursesSelection";
import GoalsAchieving from "./components/layout/GoalsAchieving";
import ViewingStudents from "./components/layout/ViewingStudents";
import TopCategories from "./components/layout/TopCategories";
import FeaturedTopics from "./components/layout/FeaturedTopics";
function App() {
  return (
    <Fragment>
      <Header></Header>
      <Banner></Banner>
      <CoursesSelection></CoursesSelection>
      <GoalsAchieving></GoalsAchieving>
      <ViewingStudents></ViewingStudents>
      <TopCategories></TopCategories>
      <FeaturedTopics></FeaturedTopics>
    </Fragment>
  );
}

export default App;
