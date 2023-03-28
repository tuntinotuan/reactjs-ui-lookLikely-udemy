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
import LeadingCompanies from "./components/layout/LeadingCompanies";
import CustomerStories from "./components/layout/CustomerStories";
import UdemyBusiness from "./components/layout/UdemyBusiness";
import Footer from "./components/layout/Footer";
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
      <LeadingCompanies></LeadingCompanies>
      <CustomerStories></CustomerStories>
      <UdemyBusiness></UdemyBusiness>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
