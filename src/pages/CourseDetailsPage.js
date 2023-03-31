import React from "react";
import { Fragment } from "react";
import MainInforDetails from "../components/layout/MainInforDetails";
import CourseAttention from "../components/others/CourseAttention";
import ChooseCompanies from "../components/layout/ChooseCompanies";
import { useState } from "react";
import { useEffect } from "react";

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

  console.log(offset);
  return (
    <Fragment>
      <MainInforDetails></MainInforDetails>
      <CourseAttention scroll={offset}></CourseAttention>
      <ChooseCompanies></ChooseCompanies>
    </Fragment>
  );
};

export default CourseDetailsPage;
