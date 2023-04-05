import React, { Fragment } from "react";
import Banner from "../components/banner/Banner";
import CoursesSelection from "../components/layout/CoursesSelection";
import CustomerStories from "../components/layout/CustomerStories";
import FeaturedTopics from "../components/layout/FeaturedTopics";
import GoalsAchieving from "../components/layout/GoalsAchieving";
import LeadingCompanies from "../components/layout/LeadingCompanies";
import TopCategories from "../components/layout/TopCategories";
import UdemyBusiness from "../components/layout/UdemyBusiness";
import ViewingStudents from "../components/layout/ViewingStudents";
import useViewport from "../hooks/useViewport";
import { useEffect } from "react";

const HomePage = () => {
  const { width } = useViewport();
  const isMobile = width >= 415 && width <= 768;
  const isTable = width > 768 && width <= 1024;
  console.log("isMobile", isMobile);
  console.log("viewPort.width", width);
  if (isMobile) {
    return (
      <Fragment>
        <Banner
          heightBanner="h-[300px]"
          btnLeft={"top-1/2 left-5"}
          btnRight={`top-1/2 right-5`}
        ></Banner>
        <CoursesSelection
          table="mx-6"
          card={3}
          text="w-auto"
        ></CoursesSelection>
        <GoalsAchieving table={"px-6"}></GoalsAchieving>
        <ViewingStudents table={"mx-6"} card={3}></ViewingStudents>
        <TopCategories table={"px-6"} heightImage={"h-auto"}></TopCategories>
        <FeaturedTopics table={"px-6"}></FeaturedTopics>
        <LeadingCompanies table={"px-6"}></LeadingCompanies>
        <CustomerStories></CustomerStories>
        <UdemyBusiness
          table="flex flex-col text-center px-20"
          image="order-first w-full h-full mb-5"
        ></UdemyBusiness>
      </Fragment>
    );
  }
  if (isTable) {
    return (
      <Fragment>
        <Banner
          heightBanner="h-[300px]"
          btnLeft={"top-1/2 left-5"}
          btnRight={`top-1/2 right-5`}
        ></Banner>
        <CoursesSelection
          table="mx-6"
          card={4}
          text="w-auto"
        ></CoursesSelection>
        <GoalsAchieving table={"px-6"}></GoalsAchieving>
        <ViewingStudents table={"mx-6"} card={4}></ViewingStudents>
        <TopCategories table={"px-6"} heightImage={"h-[220px]"}></TopCategories>
        <FeaturedTopics table={"px-6"}></FeaturedTopics>
        <LeadingCompanies table={"px-6"}></LeadingCompanies>
        <CustomerStories></CustomerStories>
        <UdemyBusiness></UdemyBusiness>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <Banner></Banner>
      <CoursesSelection></CoursesSelection>
      <GoalsAchieving></GoalsAchieving>
      <ViewingStudents></ViewingStudents>
      <TopCategories></TopCategories>
      <FeaturedTopics></FeaturedTopics>
      <LeadingCompanies></LeadingCompanies>
      <CustomerStories></CustomerStories>
      <UdemyBusiness></UdemyBusiness>
    </Fragment>
  );
};

export default HomePage;
