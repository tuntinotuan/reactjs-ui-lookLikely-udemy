import React, { Fragment } from "react";
import Banner from "../components/banner/Banner";
import CoursesSelection from "../components/layout/CoursesSelection";
import CustomerStories from "../components/layout/CustomerStories";
import FeaturedTopics from "../components/layout/FeaturedTopics";
import Footer from "../components/layout/Footer";
import GoalsAchieving from "../components/layout/GoalsAchieving";
import LeadingCompanies from "../components/layout/LeadingCompanies";
import TopCategories from "../components/layout/TopCategories";
import UdemyBusiness from "../components/layout/UdemyBusiness";
import ViewingStudents from "../components/layout/ViewingStudents";

const HomePage = () => {
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
