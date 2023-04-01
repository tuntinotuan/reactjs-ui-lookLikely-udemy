import React from "react";
import { Fragment } from "react";
import MainInforDetails from "../components/layout/MainInforDetails";
import CourseAttention from "../components/others/CourseAttention";
import ChooseCompanies from "../components/layout/ChooseCompanies";
import { useState } from "react";
import { useEffect } from "react";
import WhatYouLearn from "../components/layout/WhatYouLearn";
import VideoCourse from "../components/layout/VideoCourse";
import CompaniesOffer from "../components/layout/CompaniesOffer";
import CourseContent from "../components/course/CourseContent";
import TitleWithDots from "../components/others/TitleWithDots";
import CourseDescription from "../components/course/CourseDescription";

const CourseDetailsPage = () => {
  // const [scrollTop, setScrollTop] = useState(0);

  // const handleScroll = (event) => {
  //   setScrollTop(event.currentTarget.scrollTop);
  // };
  // console.log("of set~:", scrollTop);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // console.log(offset);
  return (
    <Fragment>
      <MainInforDetails></MainInforDetails>
      <CourseAttention scroll={offset}></CourseAttention>
      <BodyBelow scroll={offset}></BodyBelow>
      <ChooseCompanies></ChooseCompanies>
    </Fragment>
  );
};
function BodyBelow({ scroll }) {
  return (
    <section className="py-8 h-auto">
      <div className="page-container-fluid relative h-full flex items-start gap-10">
        <div className="h-full w-[690px]">
          <Left></Left>
        </div>
        <div className="flex flex-col justify-end h-full w-[350px] px-2">
          <Right scroll={scroll}></Right>
        </div>
      </div>
    </section>
  );
}
function Left() {
  return (
    <Fragment>
      <WhatYouLearn></WhatYouLearn>
      <CompaniesOffer></CompaniesOffer>
      <CourseContent></CourseContent>
      <TitleWithDots></TitleWithDots>
      <CourseDescription></CourseDescription>
    </Fragment>
  );
}
function Right({ scroll }) {
  return (
    <Fragment>
      <VideoCourse offset={scroll}></VideoCourse>
    </Fragment>
  );
}
export default CourseDetailsPage;
