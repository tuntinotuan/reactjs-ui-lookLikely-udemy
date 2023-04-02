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
import StudentsAlsoBought from "../components/layout/StudentsAlsoBought";
import FrequentlyBoughtTogether from "../components/layout/FrequentlyBoughtTogether";
import CourseDetailsInstructor from "../components/layout/CourseDetailsInstructor";
import UserComment from "../components/others/UserComment";
import Button from "../components/button/Button";

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
      <StudentsAlsoBought></StudentsAlsoBought>
      <FrequentlyBoughtTogether></FrequentlyBoughtTogether>
      <CourseDetailsInstructor></CourseDetailsInstructor>
      <CourseRating></CourseRating>
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
function CourseRating() {
  return (
    <section className="my-5">
      <div className="flex items-center gap-1 text-2xl font-bold mb-5">
        <img
          src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
          alt=""
          className="w-5 h-5"
        />
        <h1>4.3 course rating</h1>
        <div className="w-2 h-2 bg-slate-600 rounded-full mx-1"></div>
        <h1>19K ratings</h1>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {dataLocal.map((items) => (
          <UserComment
            name={items.name}
            shortName={items.short_name}
            time={items.time}
            content={items.text}
          ></UserComment>
        ))}
      </div>
      <Button className="font-bold">Show all reviews</Button>
    </section>
  );
}
export default CourseDetailsPage;

const dataLocal = [
  {
    name: "Vishwas M.",
    short_name: "VM",
    time: "3 weeks ago",
    text: `This course was put together a long time ago and I would expect the author's team to notify changes in the codes (in some way) to newer learners. I personally had to spend a lot of time finding the right syntax/codes, and would appreciate a heads-up (displaying the year a particular course was designed) before enrolling for it.`,
  },
  {
    name: "Eugene B.",
    short_name: "EB",
    time: "a weeks ago",
    text: `This was a great intro for Python and Machine learning. After finishing the course I really appreciate him providing discounts, as well as the links to his notes whether we would like to self study or not! It really makes it feel like he cares for our learning`,
  },
  {
    name: "Hsuan-Wen C.",
    short_name: "HC",
    time: "a weeks ago",
    text: `Jose is an excellent instructor. He broke down complex concepts to easy to understand explanations. However, I think there are two things this course can be improved:
    1) Update the content to reflect Python 3
    2) Include a final project requirement for students to get hands-on experience`,
  },
  {
    name: "Khotibul U.",
    short_name: "KU",
    time: "two weeks ago",
    text: `Good course, i finished this course and every lecturer that i learned is understandable and feel so easy to do, hopefully this course help me up to reach my goal on data analyst`,
  },
];
